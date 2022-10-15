import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  TextAttribute,
  UIDAttribute,
  MediaAttribute,
  BigIntegerAttribute,
  SingleTypeSchema,
  SetPluginOptions,
  RichTextAttribute,
  ComponentAttribute,
  DateAttribute,
  DynamicZoneAttribute,
  ComponentSchema,
} from '@strapi/strapi'

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    properties: JSONAttribute & DefaultTo<{}>
    conditions: JSONAttribute & DefaultTo<[]>
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    username: StringAttribute
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    registrationToken: StringAttribute & PrivateAttribute
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> & PrivateAttribute
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    preferedLanguage: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>
    permissions: RelationAttribute<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<''>
    type: EnumerationAttribute<['read-only', 'full-access', 'custom']> &
      RequiredAttribute &
      DefaultTo<'read-only'>
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: DateTimeAttribute
    permissions: RelationAttribute<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    expiresAt: DateTimeAttribute
    lifespan: IntegerAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    token: RelationAttribute<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    alternativeText: StringAttribute
    caption: StringAttribute
    width: IntegerAttribute
    height: IntegerAttribute
    formats: JSONAttribute
    hash: StringAttribute & RequiredAttribute
    ext: StringAttribute
    mime: StringAttribute & RequiredAttribute
    size: DecimalAttribute & RequiredAttribute
    url: StringAttribute & RequiredAttribute
    previewUrl: StringAttribute
    provider: StringAttribute & RequiredAttribute
    provider_metadata: JSONAttribute
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>
    folder: RelationAttribute<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
      PrivateAttribute
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute
    parent: RelationAttribute<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginEmailDesignerEmailTemplate extends CollectionTypeSchema {
  info: {
    singularName: 'email-template'
    pluralName: 'email-templates'
    displayName: 'Email-template'
    name: 'email-template'
  }
  options: {
    draftAndPublish: false
    timestamps: true
    increments: true
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    templateReferenceId: IntegerAttribute & UniqueAttribute
    design: JSONAttribute
    name: StringAttribute
    subject: StringAttribute
    bodyHtml: TextAttribute
    bodyText: TextAttribute
    enabled: BooleanAttribute & DefaultTo<true>
    tags: JSONAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginEntityNotesNote extends CollectionTypeSchema {
  info: {
    singularName: 'note'
    pluralName: 'notes'
    displayName: 'notes'
  }
  options: {
    draftAndPublish: false
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    title: StringAttribute
    content: TextAttribute
    entityId: IntegerAttribute
    entitySlug: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::entity-notes.note', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::entity-notes.note', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginPublisherAction extends CollectionTypeSchema {
  info: {
    singularName: 'action'
    pluralName: 'actions'
    displayName: 'actions'
  }
  options: {
    draftAndPublish: false
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    executeAt: DateTimeAttribute
    mode: StringAttribute
    entityId: IntegerAttribute
    entitySlug: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::publisher.action', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::publisher.action', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginMenusMenu extends CollectionTypeSchema {
  info: {
    displayName: 'Menu'
    singularName: 'menu'
    pluralName: 'menus'
    tableName: 'menus'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'plugin::menus.menu', 'title'> & RequiredAttribute
    items: RelationAttribute<'plugin::menus.menu', 'oneToMany', 'plugin::menus.menu-item'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::menus.menu', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'plugin::menus.menu', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginMenusMenuItem extends CollectionTypeSchema {
  info: {
    displayName: 'Menu Item'
    singularName: 'menu-item'
    pluralName: 'menu-items'
    tableName: 'menu_items'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    order: IntegerAttribute
    title: StringAttribute & RequiredAttribute
    url: StringAttribute
    target: EnumerationAttribute<['_blank', '_parent', '_self', '_top']>
    root_menu: RelationAttribute<'plugin::menus.menu-item', 'manyToOne', 'plugin::menus.menu'> &
      RequiredAttribute
    parent: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'plugin::menus.menu-item'>
    description: TextAttribute
    icon: MediaAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginStrapiNewsletterNewsletter extends CollectionTypeSchema {
  info: {
    singularName: 'newsletter'
    pluralName: 'newsletters'
    displayName: 'Newsletter'
  }
  options: {
    draftAndPublish: false
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    subject: StringAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::strapi-newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::strapi-newsletter.newsletter',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginStrapiNewsletterSubscribedUser extends CollectionTypeSchema {
  info: {
    singularName: 'subscribed-user'
    pluralName: 'subscribed-users'
    displayName: 'Subscribed Users'
  }
  options: {
    draftAndPublish: false
    comment: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    email: EmailAttribute & RequiredAttribute & UniqueAttribute
    provider: StringAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::strapi-newsletter.subscribed-user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::strapi-newsletter.subscribed-user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1
        max: 50
      }>
    code: StringAttribute & UniqueAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute & RequiredAttribute
    role: RelationAttribute<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    description: StringAttribute
    type: StringAttribute & UniqueAttribute
    permissions: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    provider: StringAttribute
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    confirmationToken: StringAttribute & PrivateAttribute
    confirmed: BooleanAttribute & DefaultTo<false>
    blocked: BooleanAttribute & DefaultTo<false>
    role: RelationAttribute<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    applications: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::application.application'
    >
    avatar: MediaAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginSchedulerScheduler extends CollectionTypeSchema {
  info: {
    collectionName: 'scheduler'
    singularName: 'scheduler'
    pluralName: 'scheduler'
    displayName: 'scheduler'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    scheduledDatetime: DateTimeAttribute
    uid: StringAttribute
    contentId: BigIntegerAttribute
    scheduleType: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::scheduler.scheduler', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::scheduler.scheduler', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginStrapiStripeStrapiStripeProduct extends CollectionTypeSchema {
  info: {
    tableName: 'StrapiStripeProduct'
    singularName: 'strapi-stripe-product'
    pluralName: 'strapi-stripe-products'
    displayName: 'Product'
    description: 'Stripe Products'
    kind: 'collectionType'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    slug: UIDAttribute<'plugin::strapi-stripe.strapi-stripe-product', 'title'> &
      RequiredAttribute &
      UniqueAttribute
    description: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    price: DecimalAttribute & RequiredAttribute
    currency: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    productImage: MediaAttribute & RequiredAttribute
    isSubscription: BooleanAttribute & DefaultTo<false>
    interval: StringAttribute
    trialPeriodDays: IntegerAttribute
    stripeProductId: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 3
      }>
    stripePriceId: StringAttribute &
      SetMinMax<{
        min: 3
      }>
    stripePlanId: StringAttribute &
      SetMinMax<{
        min: 3
      }>
    stripePayment: RelationAttribute<
      'plugin::strapi-stripe.strapi-stripe-product',
      'oneToMany',
      'plugin::strapi-stripe.strapi-stripe-payment'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::strapi-stripe.strapi-stripe-product',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::strapi-stripe.strapi-stripe-product',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface PluginStrapiStripeStrapiStripePayment extends CollectionTypeSchema {
  info: {
    tableName: 'StrapiStripePayment'
    singularName: 'strapi-stripe-payment'
    pluralName: 'strapi-stripe-payments'
    displayName: 'Payment'
    description: 'Stripe Payment'
    kind: 'collectionType'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    txnDate: DateTimeAttribute & RequiredAttribute
    transactionId: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 250
      }>
    isTxnSuccessful: BooleanAttribute & DefaultTo<false>
    txnMessage: StringAttribute &
      SetMinMaxLength<{
        maxLength: 5000
      }>
    txnErrorMessage: StringAttribute &
      SetMinMaxLength<{
        maxLength: 250
      }>
    txnAmount: DecimalAttribute & RequiredAttribute
    customerName: StringAttribute & RequiredAttribute
    customerEmail: StringAttribute & RequiredAttribute
    stripeProduct: RelationAttribute<
      'plugin::strapi-stripe.strapi-stripe-payment',
      'manyToOne',
      'plugin::strapi-stripe.strapi-stripe-product'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::strapi-stripe.strapi-stripe-payment',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::strapi-stripe.strapi-stripe-payment',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiAboutPageAboutPage extends SingleTypeSchema {
  info: {
    singularName: 'about-page'
    pluralName: 'about-pages'
    displayName: 'About Page'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: ComponentAttribute<'shared.seo'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::about-page.about-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::about-page.about-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::about-page.about-page',
      'oneToMany',
      'api::about-page.about-page'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiApplicationApplication extends CollectionTypeSchema {
  info: {
    singularName: 'application'
    pluralName: 'applications'
    displayName: 'Application'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    open_position: RelationAttribute<
      'api::application.application',
      'manyToOne',
      'api::open-position.open-position'
    >
    users_permissions_user: RelationAttribute<
      'api::application.application',
      'manyToOne',
      'plugin::users-permissions.user'
    >
    additional: RichTextAttribute
    documents: MediaAttribute
    email: EmailAttribute & RequiredAttribute
    state: EnumerationAttribute<['submitted', 'responded', 'draft', 'accepted', 'rejected']> &
      DefaultTo<'submitted'>
    name: StringAttribute & RequiredAttribute
    start: DateAttribute
    motivation: RichTextAttribute
    cv: RichTextAttribute
    url: UIDAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::application.application', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::application.application', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiArticleArticle extends CollectionTypeSchema {
  info: {
    singularName: 'article'
    pluralName: 'articles'
    displayName: 'Article'
    name: 'article'
    description: ''
  }
  options: {
    increments: true
    timestamps: true
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: TextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    content: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: UIDAttribute<'api::article.article', 'title'> & RequiredAttribute
    image: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    author: RelationAttribute<'api::article.article', 'manyToOne', 'api::writer.writer'>
    seo: ComponentAttribute<'shared.seo'> &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::article.article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::article.article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<'api::article.article', 'oneToMany', 'api::article.article'>
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiBlogAuthorBlogAuthor extends CollectionTypeSchema {
  info: {
    singularName: 'blog-author'
    pluralName: 'blog-authors'
    displayName: 'Blog Author'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    firstName: StringAttribute
    lastName: StringAttribute
    image: MediaAttribute
    bio: RichTextAttribute &
      SetMinMaxLength<{
        maxLength: 300
      }>
    email: EmailAttribute
    blog_posts: RelationAttribute<
      'api::blog-author.blog-author',
      'manyToMany',
      'api::blog-post.blog-post'
    >
    team_members: RelationAttribute<
      'api::blog-author.blog-author',
      'oneToMany',
      'api::team-member.team-member'
    >
    twitter: StringAttribute
    github: StringAttribute
    orcid: StringAttribute
    slug: UIDAttribute<'api::blog-author.blog-author', 'lastName'>
    seo: ComponentAttribute<'shared.seo'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::blog-author.blog-author', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::blog-author.blog-author', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiBlogHomeBlogHome extends SingleTypeSchema {
  info: {
    singularName: 'blog-home'
    pluralName: 'blog-homes'
    displayName: 'Blog Home'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: RichTextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: ComponentAttribute<'shared.seo'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::blog-home.blog-home', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::blog-home.blog-home', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::blog-home.blog-home',
      'oneToMany',
      'api::blog-home.blog-home'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiBlogPostBlogPost extends CollectionTypeSchema {
  info: {
    singularName: 'blog-post'
    pluralName: 'blog-posts'
    displayName: 'Blog Post'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute & RequiredAttribute & UniqueAttribute
    image: MediaAttribute & RequiredAttribute
    body: RichTextAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 200
      }>
    excerpt: TextAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 200
      }>
    blog_authors: RelationAttribute<
      'api::blog-post.blog-post',
      'manyToMany',
      'api::blog-author.blog-author'
    >
    publishDate: DateTimeAttribute
    slug: UIDAttribute<'api::blog-post.blog-post', 'title'>
    blog_tags: RelationAttribute<'api::blog-post.blog-post', 'manyToMany', 'api::tag.tag'>
    seo: ComponentAttribute<'shared.seo'>
    related: RelationAttribute<'api::blog-post.blog-post', 'oneToMany', 'api::blog-post.blog-post'>
    team_members: RelationAttribute<
      'api::blog-post.blog-post',
      'manyToMany',
      'api::team-member.team-member'
    >
    academic: ComponentAttribute<'shared.academic'>
    category: RelationAttribute<'api::blog-post.blog-post', 'manyToOne', 'api::category.category'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::blog-post.blog-post', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::blog-post.blog-post', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
  info: {
    singularName: 'category'
    pluralName: 'categories'
    displayName: 'Category'
    name: 'category'
    description: ''
  }
  options: {
    increments: true
    timestamps: true
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: UIDAttribute & RequiredAttribute
    blog_posts: RelationAttribute<'api::category.category', 'oneToMany', 'api::blog-post.blog-post'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiDepartmentDepartment extends CollectionTypeSchema {
  info: {
    singularName: 'department'
    pluralName: 'departments'
    displayName: 'Department'
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    Name: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::department.department', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::department.department', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiDonatePageDonatePage extends SingleTypeSchema {
  info: {
    singularName: 'donate-page'
    pluralName: 'donate-pages'
    displayName: 'Donate Page'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: ComponentAttribute<'shared.seo'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::donate-page.donate-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::donate-page.donate-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::donate-page.donate-page',
      'oneToMany',
      'api::donate-page.donate-page'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiEditorEditor extends CollectionTypeSchema {
  info: {
    singularName: 'editor'
    pluralName: 'editors'
    displayName: 'Editor'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    Title: StringAttribute & RequiredAttribute & UniqueAttribute
    email: EmailAttribute
    jote_article_categories: RelationAttribute<
      'api::editor.editor',
      'oneToMany',
      'api::jote-article-category.jote-article-category'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::editor.editor', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::editor.editor', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiGlobalGlobal extends SingleTypeSchema {
  info: {
    singularName: 'global'
    pluralName: 'globals'
    displayName: 'Global'
    name: 'global'
  }
  options: {
    increments: true
    timestamps: true
    draftAndPublish: false
  }
  attributes: {
    siteName: StringAttribute & RequiredAttribute
    defaultSeo: ComponentAttribute<'shared.seo'> & RequiredAttribute
    favicon: MediaAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::global.global', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::global.global', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiHomepageHomepage extends SingleTypeSchema {
  info: {
    singularName: 'homepage'
    pluralName: 'homepages'
    displayName: 'Homepage'
    name: 'homepage'
    description: ''
  }
  options: {
    increments: true
    timestamps: true
    draftAndPublish: false
  }
  attributes: {
    seo: ComponentAttribute<'shared.seo'>
    hero: ComponentAttribute<'sections.hero'> & RequiredAttribute
    body: RichTextAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiInitiativeInitiative extends CollectionTypeSchema {
  info: {
    singularName: 'initiative'
    pluralName: 'initiatives'
    displayName: 'Initiative'
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::initiative.initiative', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::initiative.initiative', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiJoteArticleJoteArticle extends CollectionTypeSchema {
  info: {
    singularName: 'jote-article'
    pluralName: 'jote-articles'
    displayName: 'JOTE Article'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute
    abstract: RichTextAttribute
    published: DateTimeAttribute
    submitted: DateTimeAttribute
    accepted: DateTimeAttribute
    image: MediaAttribute
    jote_article_category: RelationAttribute<
      'api::jote-article.jote-article',
      'oneToOne',
      'api::jote-article-category.jote-article-category'
    >
    doi: StringAttribute & UniqueAttribute
    url: StringAttribute
    guid: UIDAttribute & RequiredAttribute
    references: JSONAttribute
    authors: JSONAttribute
    keywords: JSONAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::jote-article.jote-article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::jote-article.jote-article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiJoteArticleCategoryJoteArticleCategory extends CollectionTypeSchema {
  info: {
    singularName: 'jote-article-category'
    pluralName: 'jote-article-categories'
    displayName: 'JOTE Article Category'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute & RequiredAttribute & UniqueAttribute
    invited: BooleanAttribute
    doiPrefix: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        maxLength: 5
      }>
    slug: UIDAttribute<'api::jote-article-category.jote-article-category', 'title'> &
      RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::jote-article-category.jote-article-category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::jote-article-category.jote-article-category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiJoteAuthorJoteAuthor extends CollectionTypeSchema {
  info: {
    singularName: 'jote-author'
    pluralName: 'jote-authors'
    displayName: 'JOTE Author'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    firstName: StringAttribute
    lastName: StringAttribute
    title: StringAttribute
    email: EmailAttribute
    orcid: StringAttribute
    affiliation: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::jote-author.jote-author', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::jote-author.jote-author', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiLegalPageLegalPage extends SingleTypeSchema {
  info: {
    singularName: 'legal-page'
    pluralName: 'legal-pages'
    displayName: 'Legal Page'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    documents: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::legal-page.legal-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::legal-page.legal-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::legal-page.legal-page',
      'oneToMany',
      'api::legal-page.legal-page'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiOpenPositionOpenPosition extends CollectionTypeSchema {
  info: {
    singularName: 'open-position'
    pluralName: 'open-positions'
    displayName: 'Open Position'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    type: EnumerationAttribute<['internship', 'volunteer', 'part-time', 'full-time']> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    startDate: DateAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    paid: BooleanAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      DefaultTo<false>
    needToHave: RichTextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    moreInfoMail: EmailAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      DefaultTo<'info@trialanderror.org'>
    image: MediaAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: UIDAttribute<'api::open-position.open-position', 'title'> &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    vacancies: IntegerAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      DefaultTo<1>
    applyUrl: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    applications: RelationAttribute<
      'api::open-position.open-position',
      'oneToMany',
      'api::application.application'
    >
    niceToHave: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    whatYoullDo: RichTextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: ComponentAttribute<'shared.seo'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    location: EnumerationAttribute<['remote', 'Utrecht']> &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      DefaultTo<'remote'>
    summary: TextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      SetMinMaxLength<{
        maxLength: 300
      }>
    twitterPost: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    linkedinPost: StringAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    futureCoworkers: RelationAttribute<
      'api::open-position.open-position',
      'manyToMany',
      'api::team-member.team-member'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::open-position.open-position', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::open-position.open-position', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::open-position.open-position',
      'oneToMany',
      'api::open-position.open-position'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiOpenPositionsPageOpenPositionsPage extends SingleTypeSchema {
  info: {
    singularName: 'open-positions-page'
    pluralName: 'open-positions-pages'
    displayName: 'Open Positions Page'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: RichTextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    noPositionsText: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::open-positions-page.open-positions-page',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::open-positions-page.open-positions-page',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::open-positions-page.open-positions-page',
      'oneToMany',
      'api::open-positions-page.open-positions-page'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiPagePage extends CollectionTypeSchema {
  info: {
    singularName: 'page'
    pluralName: 'pages'
    displayName: 'Page'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    block: DynamicZoneAttribute<['components.text-block']> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: ComponentAttribute<'shared.seo'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    image: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: StringAttribute &
      UniqueAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::page.page', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::page.page', 'oneToOne', 'admin::user'> & PrivateAttribute
    localizations: RelationAttribute<'api::page.page', 'oneToMany', 'api::page.page'>
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiPositionPosition extends CollectionTypeSchema {
  info: {
    singularName: 'position'
    pluralName: 'positions'
    displayName: 'Position'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    title: StringAttribute & RequiredAttribute & UniqueAttribute
    description: RichTextAttribute
    email: EmailAttribute
    department: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::position.position', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::position.position', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiTagTag extends CollectionTypeSchema {
  info: {
    singularName: 'tag'
    pluralName: 'tags'
    displayName: 'Blog Tag'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        maxLength: 25
      }>
    slug: UIDAttribute<'api::tag.tag', 'title'>
    blog_posts: RelationAttribute<'api::tag.tag', 'manyToMany', 'api::blog-post.blog-post'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::tag.tag', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::tag.tag', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiTeamMemberTeamMember extends CollectionTypeSchema {
  info: {
    singularName: 'team-member'
    pluralName: 'team-members'
    displayName: 'Team Member'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    firstName: StringAttribute & RequiredAttribute
    lastName: StringAttribute
    email: EmailAttribute
    bio: RichTextAttribute
    image: MediaAttribute
    show_pronouns: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    pronouns: StringAttribute & RequiredAttribute
    azureID: StringAttribute & UniqueAttribute
    twitter: StringAttribute & UniqueAttribute
    github: StringAttribute & UniqueAttribute
    orcid: StringAttribute & UniqueAttribute
    personalWebsite: StringAttribute
    position: StringAttribute & RequiredAttribute
    department: EnumerationAttribute<
      ['Editorial', 'Board', 'IT', 'Design', 'Outreach', 'Production']
    >
    slug: UIDAttribute<'api::team-member.team-member', 'lastName'>
    seo: ComponentAttribute<'shared.seo'>
    linkedin: StringAttribute
    blog_author: RelationAttribute<
      'api::team-member.team-member',
      'manyToOne',
      'api::blog-author.blog-author'
    >
    blog_posts: RelationAttribute<
      'api::team-member.team-member',
      'manyToMany',
      'api::blog-post.blog-post'
    >
    Summary: RichTextAttribute
    relatedOpenPositions: RelationAttribute<
      'api::team-member.team-member',
      'manyToMany',
      'api::open-position.open-position'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::team-member.team-member', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::team-member.team-member', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiTeamPageTeamPage extends SingleTypeSchema {
  info: {
    singularName: 'team-page'
    pluralName: 'team-pages'
    displayName: 'Team Page'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    seo: ComponentAttribute<'shared.seo'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    content: RichTextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::team-page.team-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::team-page.team-page', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::team-page.team-page',
      'oneToMany',
      'api::team-page.team-page'
    >
    locale: StringAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiUpdateCategoryUpdateCategory extends CollectionTypeSchema {
  info: {
    singularName: 'update-category'
    pluralName: 'update-categories'
    displayName: 'Update Category'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    symbol: MediaAttribute & RequiredAttribute
    in: StringAttribute
    inurl: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::update-category.update-category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::update-category.update-category',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ApiWriterWriter extends CollectionTypeSchema {
  info: {
    singularName: 'writer'
    pluralName: 'writers'
    displayName: 'Writer'
    name: 'writer'
  }
  options: {
    increments: true
    timestamps: true
  }
  attributes: {
    name: StringAttribute
    picture: MediaAttribute
    articles: RelationAttribute<'api::writer.writer', 'oneToMany', 'api::article.article'>
    email: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::writer.writer', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::writer.writer', 'oneToOne', 'admin::user'> & PrivateAttribute
    sitemap_exclude: BooleanAttribute & PrivateAttribute & DefaultTo<false>
  }
}

export interface ChoicesAuthorOrTeamMember extends ComponentSchema {
  info: {
    displayName: 'Author or Team Member'
    icon: 'grin-beam'
    description: ''
  }
  attributes: {
    team_members: RelationAttribute<
      'choices.author-or-team-member',
      'oneToMany',
      'api::team-member.team-member'
    >
    blog_authors: RelationAttribute<
      'choices.author-or-team-member',
      'oneToMany',
      'api::blog-author.blog-author'
    >
  }
}

export interface ComponentsCta extends ComponentSchema {
  info: {
    displayName: 'cta'
    icon: 'arrow-circle-right'
    description: ''
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    url: StringAttribute & RequiredAttribute
    icon: MediaAttribute
    type: EnumerationAttribute<['primary', 'secondary', 'tertiary']> &
      RequiredAttribute &
      DefaultTo<'primary'>
  }
}

export interface ComponentsDocument extends ComponentSchema {
  info: {
    displayName: 'Document'
    icon: 'file'
  }
  attributes: {
    file: MediaAttribute
  }
}

export interface ComponentsRichText extends ComponentSchema {
  info: {
    displayName: 'Rich Text'
    icon: 'text-height'
  }
  attributes: {
    body: RichTextAttribute & RequiredAttribute
  }
}

export interface ComponentsTextBlock extends ComponentSchema {
  info: {
    displayName: 'text-block'
    icon: 'text-height'
    description: ''
  }
  attributes: {
    body: RichTextAttribute
  }
}

export interface CotePositionOrEditor extends ComponentSchema {
  info: {
    displayName: 'position-or-editor'
    icon: 'comment-dollar'
  }
  attributes: {
    position: RelationAttribute<'cote.position-or-editor', 'oneToOne', 'api::position.position'>
    editor: RelationAttribute<'cote.position-or-editor', 'oneToOne', 'api::editor.editor'>
  }
}

export interface SectionsHero extends ComponentSchema {
  info: {
    name: 'Hero'
    icon: 'address-card'
    displayName: 'hero'
    description: ''
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    body: TextAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 200
      }>
    image: MediaAttribute & RequiredAttribute
    cta: ComponentAttribute<'components.cta', true>
  }
}

export interface SharedAcademic extends ComponentSchema {
  info: {
    displayName: 'academic'
    icon: 'award'
  }
  attributes: {
    doi: StringAttribute & UniqueAttribute
    abstract: TextAttribute &
      SetMinMaxLength<{
        minLength: 50
        maxLength: 300
      }>
  }
}

export interface SharedSeo extends ComponentSchema {
  info: {
    name: 'Seo'
    icon: 'search'
    displayName: 'SEO'
    description: ''
  }
  attributes: {
    metaTitle: StringAttribute & RequiredAttribute
    metaDescription: TextAttribute & RequiredAttribute
    shareImage: MediaAttribute
    metaSocial: ComponentAttribute<'shared.shared-social', true>
    keywords: TextAttribute
    metaRobots: StringAttribute
    structuredData: JSONAttribute
    metaViewport: StringAttribute
    canonicalURL: StringAttribute
  }
}

export interface SharedSharedSocial extends ComponentSchema {
  info: {
    displayName: 'social'
    icon: 'share-alt'
    description: ''
  }
  attributes: {
    socialNetwork: EnumerationAttribute<['facebook', 'twitter']> & RequiredAttribute
    description: TextAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 65
      }>
    title: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 60
      }>
    image: MediaAttribute
  }
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate
      'plugin::entity-notes.note': PluginEntityNotesNote
      'plugin::publisher.action': PluginPublisherAction
      'plugin::menus.menu': PluginMenusMenu
      'plugin::menus.menu-item': PluginMenusMenuItem
      'plugin::strapi-newsletter.newsletter': PluginStrapiNewsletterNewsletter
      'plugin::strapi-newsletter.subscribed-user': PluginStrapiNewsletterSubscribedUser
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::scheduler.scheduler': PluginSchedulerScheduler
      'plugin::strapi-stripe.strapi-stripe-product': PluginStrapiStripeStrapiStripeProduct
      'plugin::strapi-stripe.strapi-stripe-payment': PluginStrapiStripeStrapiStripePayment
      'api::about-page.about-page': ApiAboutPageAboutPage
      'api::application.application': ApiApplicationApplication
      'api::article.article': ApiArticleArticle
      'api::blog-author.blog-author': ApiBlogAuthorBlogAuthor
      'api::blog-home.blog-home': ApiBlogHomeBlogHome
      'api::blog-post.blog-post': ApiBlogPostBlogPost
      'api::category.category': ApiCategoryCategory
      'api::department.department': ApiDepartmentDepartment
      'api::donate-page.donate-page': ApiDonatePageDonatePage
      'api::editor.editor': ApiEditorEditor
      'api::global.global': ApiGlobalGlobal
      'api::homepage.homepage': ApiHomepageHomepage
      'api::initiative.initiative': ApiInitiativeInitiative
      'api::jote-article.jote-article': ApiJoteArticleJoteArticle
      'api::jote-article-category.jote-article-category': ApiJoteArticleCategoryJoteArticleCategory
      'api::jote-author.jote-author': ApiJoteAuthorJoteAuthor
      'api::legal-page.legal-page': ApiLegalPageLegalPage
      'api::open-position.open-position': ApiOpenPositionOpenPosition
      'api::open-positions-page.open-positions-page': ApiOpenPositionsPageOpenPositionsPage
      'api::page.page': ApiPagePage
      'api::position.position': ApiPositionPosition
      'api::tag.tag': ApiTagTag
      'api::team-member.team-member': ApiTeamMemberTeamMember
      'api::team-page.team-page': ApiTeamPageTeamPage
      'api::update-category.update-category': ApiUpdateCategoryUpdateCategory
      'api::writer.writer': ApiWriterWriter
      'choices.author-or-team-member': ChoicesAuthorOrTeamMember
      'components.cta': ComponentsCta
      'components.document': ComponentsDocument
      'components.rich-text': ComponentsRichText
      'components.text-block': ComponentsTextBlock
      'cote.position-or-editor': CotePositionOrEditor
      'sections.hero': SectionsHero
      'shared.academic': SharedAcademic
      'shared.seo': SharedSeo
      'shared.shared-social': SharedSharedSocial
    }
  }
}
