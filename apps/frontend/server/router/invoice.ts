import { createRouter } from './context'
import { z } from 'zod'
import { createInvoice } from '../../validators/invoice'

export const invoiceRouter = createRouter()
  .mutation('create', {
    input: createInvoice,
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoice.create({
        data: input,
      })
    },
  })
  .query('getAll', {
    async resolve({ ctx }) {
      return await ctx.prisma.invoice.findMany()
    },
  })
  .query('get', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoice.findUnique({
        where: { id: input.id },
      })
    },
  })
  .mutation('delete', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoice.delete({
        where: { id: input.id },
      })
    },
  })
  .mutation('update', {
    input: z.object({
      id: z.string(),
      userId: z.string().optional(),
      clientId: z.string().optional(),
      dueDate: z.date().optional(),
      invoiceDate: z.date().optional(),
      totalBeforeTax: z.number().optional(),
      totalAfterTax: z.number().optional(),
      tax: z.number().optional(),
      total: z.number().optional(),
      currency: z.string().optional(),
      description: z.string().optional(),
      paid: z.boolean().optional(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoice.update({
        where: { id: input.id },
        data: input,
      })
    },
  })
  .query('getAllByClient', {
    input: z.object({
      clientId: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoice.findMany({
        where: { clientId: input.clientId },
      })
    },
  })
  .query('getAllByUser', {
    input: z.object({
      userId: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoice.findMany({
        where: { userId: input.userId },
      })
    },
  })
  .mutation('updateEntry', {
    input: z.object({
      id: z.string(),
      description: z.string().optional(),
      quantity: z.number().optional(),
      unit: z.enum(['hour', 'day']).optional(),
      unitPrice: z.number().optional(),
      totalBeforeTax: z.number().optional(),
      totalAfterTax: z.number().optional(),
      tax: z.number().optional(),
      taxRate: z.number().optional(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoiceEntry.update({
        where: { id: input.id },
        data: input,
      })
    },
  })
  .mutation('deleteEntry', {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoiceEntry.delete({
        where: { id: input.id },
      })
    },
  })
  .mutation('createEntry', {
    input: z.object({
      invoiceId: z.string(),
      description: z.string(),
      quantity: z.number(),
      unit: z.enum(['hour', 'day']),
      unitPrice: z.number(),
      totalBeforeTax: z.number(),
      totalAfterTax: z.number(),
      tax: z.number(),
      taxRate: z.number(),
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.invoiceEntry.create({
        data: input,
      })
    },
  })
