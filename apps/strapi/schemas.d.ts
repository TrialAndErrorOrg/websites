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
  BigIntegerAttribute,
  RichTextAttribute,
  UIDAttribute,
  MediaAttribute,
  SingleTypeSchema,
  ComponentAttribute,
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
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<''>
    type: EnumerationAttribute<['read-only', 'full-access']> & DefaultTo<'read-only'>
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
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
  }
}

export interface ApiArticleArticle extends CollectionTypeSchema {
  info: {
    singularName: 'article'
    pluralName: 'articles'
    displayName: 'Article'
    name: 'article'
  }
  options: {
    increments: true
    timestamps: true
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    description: TextAttribute & RequiredAttribute
    content: RichTextAttribute & RequiredAttribute
    slug: UIDAttribute<'api::article.article', 'title'> & RequiredAttribute
    category: RelationAttribute<'api::article.article', 'manyToOne', 'api::category.category'>
    image: MediaAttribute
    author: RelationAttribute<'api::article.article', 'manyToOne', 'api::writer.writer'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::article.article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::article.article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
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
    draftAndPublish: true
  }
  attributes: {
    firstName: StringAttribute & RequiredAttribute
    lastName: StringAttribute & RequiredAttribute
    image: MediaAttribute & RequiredAttribute
    bio: RichTextAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 300
      }>
    email: EmailAttribute
    blog_posts: RelationAttribute<
      'api::blog-author.blog-author',
      'manyToMany',
      'api::blog-post.blog-post'
    >
    webflowId: StringAttribute
    team_member: RelationAttribute<
      'api::blog-author.blog-author',
      'oneToOne',
      'api::team-member.team-member'
    >
    twitter: StringAttribute
    github: StringAttribute
    orcid: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::blog-author.blog-author', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::blog-author.blog-author', 'oneToOne', 'admin::user'> &
      PrivateAttribute
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
    title: StringAttribute & RequiredAttribute
    image: MediaAttribute & RequiredAttribute
    post: RichTextAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 200
      }>
    excerpt: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        maxLength: 200
      }>
    tags: RelationAttribute<'api::blog-post.blog-post', 'oneToMany', 'api::tag.tag'>
    blog_authors: RelationAttribute<
      'api::blog-post.blog-post',
      'manyToMany',
      'api::blog-author.blog-author'
    >
    webflowId: StringAttribute
    updateId: StringAttribute
    publishDate: DateTimeAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::blog-post.blog-post', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::blog-post.blog-post', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface ApiCategoryCategory extends CollectionTypeSchema {
  info: {
    singularName: 'category'
    pluralName: 'categories'
    displayName: 'Category'
    name: 'category'
  }
  options: {
    increments: true
    timestamps: true
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    slug: UIDAttribute<'api::category.category', 'name'> & RequiredAttribute
    articles: RelationAttribute<'api::category.category', 'oneToMany', 'api::article.article'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::category.category', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface ApiContentContentInterfaceContentContentInterface extends CollectionTypeSchema {
  info: {
    singularName: 'content-content-interface'
    pluralName: 'content-content-interfaces'
    displayName: 'Content-Content Interface'
    description: 'Interface between Strapi and Webflow content for e.g. blog posts.'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    type: StringAttribute & RequiredAttribute
    webflowCollectionId: StringAttribute & RequiredAttribute
    needsUpdate: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    map: JSONAttribute & RequiredAttribute
    extraMaps: JSONAttribute
    references: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::content-content-interface.content-content-interface',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::content-content-interface.content-content-interface',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface ApiContentUpdateInterfaceContentUpdateInterface extends CollectionTypeSchema {
  info: {
    singularName: 'content-update-interface'
    pluralName: 'content-update-interfaces'
    displayName: 'Content-Update Interface'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    type: StringAttribute & RequiredAttribute & UniqueAttribute
    name: StringAttribute & RequiredAttribute & DefaultTo<'title'>
    body: StringAttribute & RequiredAttribute
    image: StringAttribute & DefaultTo<'image'>
    url: StringAttribute
    slug: StringAttribute
    extraMaps: JSONAttribute
    published: StringAttribute & RequiredAttribute
    by: StringAttribute
    update_category: RelationAttribute<
      'api::content-update-interface.content-update-interface',
      'oneToOne',
      'api::update-category.update-category'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::content-update-interface.content-update-interface',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::content-update-interface.content-update-interface',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
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
  }
}

export interface ApiHomepageHomepage extends SingleTypeSchema {
  info: {
    singularName: 'homepage'
    pluralName: 'homepages'
    displayName: 'Homepage'
    name: 'homepage'
  }
  options: {
    increments: true
    timestamps: true
  }
  attributes: {
    seo: ComponentAttribute<'shared.seo'>
    hero: ComponentAttribute<'sections.hero'> & RequiredAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      PrivateAttribute
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
    jote_authors: RelationAttribute<
      'api::jote-article.jote-article',
      'oneToMany',
      'api::jote-author.jote-author'
    >
    image: MediaAttribute
    jote_article_category: RelationAttribute<
      'api::jote-article.jote-article',
      'oneToOne',
      'api::jote-article-category.jote-article-category'
    >
    doi: StringAttribute & RequiredAttribute & UniqueAttribute
    references: JSONAttribute
    webflowId: StringAttribute & UniqueAttribute
    updateId: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::jote-article.jote-article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::jote-article.jote-article', 'oneToOne', 'admin::user'> &
      PrivateAttribute
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
    name: StringAttribute & RequiredAttribute & UniqueAttribute
    invited: BooleanAttribute
    doiPrefix: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        maxLength: 5
      }>
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
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute & RequiredAttribute & UniqueAttribute
    description: RichTextAttribute
    email: EmailAttribute
    department: StringAttribute
    webflowId: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::position.position', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::position.position', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface ApiTagTag extends CollectionTypeSchema {
  info: {
    singularName: 'tag'
    pluralName: 'tags'
    displayName: 'Tag'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    webflowId: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::tag.tag', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::tag.tag', 'oneToOne', 'admin::user'> & PrivateAttribute
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
    draftAndPublish: true
  }
  attributes: {
    firstName: StringAttribute & RequiredAttribute
    lastName: StringAttribute
    email: EmailAttribute
    bio: RichTextAttribute
    image: MediaAttribute
    blog_author: RelationAttribute<
      'api::team-member.team-member',
      'oneToOne',
      'api::blog-author.blog-author'
    >
    show_pronouns: BooleanAttribute & RequiredAttribute & DefaultTo<true>
    pronouns: StringAttribute & RequiredAttribute
    webflowId: StringAttribute & UniqueAttribute
    azureID: StringAttribute & UniqueAttribute
    twitter: StringAttribute & UniqueAttribute
    github: StringAttribute & UniqueAttribute
    orcid: StringAttribute & UniqueAttribute
    personalWebsite: StringAttribute
    position: StringAttribute & RequiredAttribute
    department: EnumerationAttribute<
      ['Editorial', 'Board', 'IT', 'Design', 'Outreach', 'Production']
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::team-member.team-member', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::team-member.team-member', 'oneToOne', 'admin::user'> &
      PrivateAttribute
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
    draftAndPublish: true
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
    symbol: MediaAttribute & RequiredAttribute
    in: StringAttribute
    inurl: StringAttribute
    webflowId: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
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
  }
  attributes: {
    title: StringAttribute & RequiredAttribute
  }
}

export interface SharedSeo extends ComponentSchema {
  info: {
    name: 'Seo'
    icon: 'allergies'
  }
  attributes: {
    metaTitle: StringAttribute & RequiredAttribute
    metaDescription: TextAttribute & RequiredAttribute
    shareImage: MediaAttribute
  }
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate
      'plugin::entity-notes.note': PluginEntityNotesNote
      'plugin::scheduler.scheduler': PluginSchedulerScheduler
      'plugin::strapi-newsletter.newsletter': PluginStrapiNewsletterNewsletter
      'plugin::strapi-newsletter.subscribed-user': PluginStrapiNewsletterSubscribedUser
      'api::article.article': ApiArticleArticle
      'api::blog-author.blog-author': ApiBlogAuthorBlogAuthor
      'api::blog-post.blog-post': ApiBlogPostBlogPost
      'api::category.category': ApiCategoryCategory
      'api::content-content-interface.content-content-interface': ApiContentContentInterfaceContentContentInterface
      'api::content-update-interface.content-update-interface': ApiContentUpdateInterfaceContentUpdateInterface
      'api::department.department': ApiDepartmentDepartment
      'api::editor.editor': ApiEditorEditor
      'api::global.global': ApiGlobalGlobal
      'api::homepage.homepage': ApiHomepageHomepage
      'api::initiative.initiative': ApiInitiativeInitiative
      'api::jote-article.jote-article': ApiJoteArticleJoteArticle
      'api::jote-article-category.jote-article-category': ApiJoteArticleCategoryJoteArticleCategory
      'api::jote-author.jote-author': ApiJoteAuthorJoteAuthor
      'api::position.position': ApiPositionPosition
      'api::tag.tag': ApiTagTag
      'api::team-member.team-member': ApiTeamMemberTeamMember
      'api::update-category.update-category': ApiUpdateCategoryUpdateCategory
      'api::writer.writer': ApiWriterWriter
      'cote.position-or-editor': CotePositionOrEditor
      'sections.hero': SectionsHero
      'shared.seo': SharedSeo
    }
  }
}
