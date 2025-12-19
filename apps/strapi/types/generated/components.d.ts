import type { Schema, Attribute } from '@strapi/strapi'

export interface ChoicesAuthorOrTeamMember extends Schema.Component {
  collectionName: 'components_choices_author_or_team_members'
  info: {
    displayName: 'Author or Team Member'
    icon: 'grin-beam'
    description: ''
  }
  attributes: {
    team_members: Attribute.Relation<
      'choices.author-or-team-member',
      'oneToMany',
      'api::team-member.team-member'
    >
    blog_authors: Attribute.Relation<
      'choices.author-or-team-member',
      'oneToMany',
      'api::blog-author.blog-author'
    >
  }
}

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas'
  info: {
    displayName: 'cta'
    icon: 'arrow-circle-right'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    url: Attribute.String & Attribute.Required
    icon: Attribute.Media<'images'>
    type: Attribute.Enumeration<['primary', 'secondary', 'tertiary']> &
      Attribute.Required &
      Attribute.DefaultTo<'primary'>
  }
}

export interface ComponentsDocument extends Schema.Component {
  collectionName: 'components_components_documents'
  info: {
    displayName: 'Document'
    icon: 'file'
  }
  attributes: {
    file: Attribute.Media<'files' | 'audios' | 'videos' | 'images', true>
  }
}

export interface ComponentsRichText extends Schema.Component {
  collectionName: 'components_components_rich_texts'
  info: {
    displayName: 'Rich Text'
    icon: 'text-height'
    description: ''
  }
  attributes: {
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
  }
}

export interface ComponentsTextBlock extends Schema.Component {
  collectionName: 'components_components_text_blocks'
  info: {
    displayName: 'text-block'
    icon: 'text-height'
    description: ''
  }
  attributes: {
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
  }
}

export interface CotePositionOrEditor extends Schema.Component {
  collectionName: 'components_cote_position_or_editors'
  info: {
    displayName: 'position-or-editor'
    icon: 'comment-dollar'
  }
  attributes: {
    position: Attribute.Relation<'cote.position-or-editor', 'oneToOne', 'api::position.position'>
  }
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_decoration_heroes'
  info: {
    name: 'Hero'
    icon: 'address-card'
    displayName: 'hero'
    description: ''
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    body: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200
      }>
    image: Attribute.Media<'images'> & Attribute.Required
    cta: Attribute.Component<'components.cta', true>
  }
}

export interface SharedAcademic extends Schema.Component {
  collectionName: 'components_shared_academics'
  info: {
    displayName: 'academic'
    icon: 'award'
  }
  attributes: {
    doi: Attribute.String & Attribute.Unique
    abstract: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 50
        maxLength: 300
      }>
  }
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos'
  info: {
    name: 'Seo'
    icon: 'search'
    displayName: 'SEO'
    description: ''
  }
  attributes: {
    metaTitle: Attribute.String & Attribute.Required
    metaDescription: Attribute.Text & Attribute.Required
    shareImage: Attribute.Media<'images'>
    metaSocial: Attribute.Component<'shared.shared-social', true>
    keywords: Attribute.Text
    metaRobots: Attribute.String
    structuredData: Attribute.JSON
    metaViewport: Attribute.String
    canonicalURL: Attribute.String
  }
}

export interface SharedSharedSocial extends Schema.Component {
  collectionName: 'components_shared_shared_socials'
  info: {
    displayName: 'social'
    icon: 'share-alt'
    description: ''
  }
  attributes: {
    socialNetwork: Attribute.Enumeration<['facebook', 'twitter']> & Attribute.Required
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65
      }>
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60
      }>
    image: Attribute.Media<'images' | 'files' | 'videos'>
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
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
