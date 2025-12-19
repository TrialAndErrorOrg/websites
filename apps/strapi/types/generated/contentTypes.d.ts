import type { Schema, Attribute } from '@strapi/strapi'

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions'
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    properties: Attribute.JSON & Attribute.DefaultTo<{}>
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users'
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
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    username: Attribute.String
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    registrationToken: Attribute.String & Attribute.Private
    isActive: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> & Attribute.Private
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    preferedLanguage: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles'
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>
    permissions: Attribute.Relation<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens'
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions'
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens'
  info: {
    name: 'Transfer Token'
    singularName: 'transfer-token'
    pluralName: 'transfer-tokens'
    displayName: 'Transfer Token'
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }> &
      Attribute.DefaultTo<''>
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: Attribute.DateTime
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >
    expiresAt: Attribute.DateTime
    lifespan: Attribute.BigInteger
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions'
  info: {
    name: 'Transfer Token Permission'
    description: ''
    singularName: 'transfer-token-permission'
    pluralName: 'transfer-token-permissions'
    displayName: 'Transfer Token Permission'
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
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1
      }>
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::transfer-token-permission', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface AdminWorkflow extends Schema.CollectionType {
  collectionName: 'strapi_workflows'
  info: {
    name: 'Workflow'
    description: ''
    singularName: 'workflow'
    pluralName: 'workflows'
    displayName: 'Workflow'
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
    name: Attribute.String & Attribute.Required & Attribute.Unique
    stages: Attribute.Relation<'admin::workflow', 'oneToMany', 'admin::workflow-stage'>
    contentTypes: Attribute.JSON & Attribute.Required & Attribute.DefaultTo<[]>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::workflow', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::workflow', 'oneToOne', 'admin::user'> & Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface AdminWorkflowStage extends Schema.CollectionType {
  collectionName: 'strapi_workflows_stages'
  info: {
    name: 'Workflow Stage'
    description: ''
    singularName: 'workflow-stage'
    pluralName: 'workflow-stages'
    displayName: 'Stages'
  }
  options: {
    version: '1.1.0'
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
    name: Attribute.String
    color: Attribute.String & Attribute.DefaultTo<'#4945FF'>
    workflow: Attribute.Relation<'admin::workflow-stage', 'manyToOne', 'admin::workflow'>
    permissions: Attribute.Relation<'admin::workflow-stage', 'manyToMany', 'admin::permission'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::workflow-stage', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'admin::workflow-stage', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files'
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
    name: Attribute.String & Attribute.Required
    alternativeText: Attribute.String
    caption: Attribute.String
    width: Attribute.Integer
    height: Attribute.Integer
    formats: Attribute.JSON
    hash: Attribute.String & Attribute.Required
    ext: Attribute.String
    mime: Attribute.String & Attribute.Required
    size: Attribute.Decimal & Attribute.Required
    url: Attribute.String & Attribute.Required
    previewUrl: Attribute.String
    provider: Attribute.String & Attribute.Required
    provider_metadata: Attribute.JSON
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>
    folder: Attribute.Relation<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
      Attribute.Private
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      Attribute.Private
    blurhash: Attribute.Text
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders'
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique
    parent: Attribute.Relation<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: Attribute.Relation<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1
        },
        number
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases'
  info: {
    singularName: 'release'
    pluralName: 'releases'
    displayName: 'Release'
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
    name: Attribute.String & Attribute.Required
    releasedAt: Attribute.DateTime
    scheduledAt: Attribute.DateTime
    timezone: Attribute.String
    status: Attribute.Enumeration<['ready', 'blocked', 'failed', 'done', 'empty']> &
      Attribute.Required
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::content-releases.release', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginContentReleasesReleaseAction extends Schema.CollectionType {
  collectionName: 'strapi_release_actions'
  info: {
    singularName: 'release-action'
    pluralName: 'release-actions'
    displayName: 'Release Action'
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
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required
    entry: Attribute.Relation<'plugin::content-releases.release-action', 'morphToOne'>
    contentType: Attribute.String & Attribute.Required
    locale: Attribute.String
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >
    isEntryValid: Attribute.Boolean
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginEntityNotesNote extends Schema.CollectionType {
  collectionName: 'notes'
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
    title: Attribute.String
    content: Attribute.Text
    entityId: Attribute.Integer
    entitySlug: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::entity-notes.note', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::entity-notes.note', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginMenusMenu extends Schema.CollectionType {
  collectionName: 'menus'
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
    title: Attribute.String & Attribute.Required
    slug: Attribute.UID<'plugin::menus.menu', 'title'> & Attribute.Required
    items: Attribute.Relation<'plugin::menus.menu', 'oneToMany', 'plugin::menus.menu-item'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::menus.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::menus.menu', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginMenusMenuItem extends Schema.CollectionType {
  collectionName: 'menu_items'
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
    order: Attribute.Integer
    title: Attribute.String & Attribute.Required
    url: Attribute.String
    target: Attribute.Enumeration<['_blank', '_parent', '_self', '_top']>
    root_menu: Attribute.Relation<'plugin::menus.menu-item', 'manyToOne', 'plugin::menus.menu'> &
      Attribute.Required
    parent: Attribute.Relation<'plugin::menus.menu-item', 'oneToOne', 'plugin::menus.menu-item'>
    description: Attribute.Text
    icon: Attribute.Media<'images'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::menus.menu-item', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale'
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
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1
          max: 50
        },
        number
      >
    code: Attribute.String & Attribute.Unique
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsPermission extends Schema.CollectionType {
  collectionName: 'up_permissions'
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
    action: Attribute.String & Attribute.Required
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles'
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
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    description: Attribute.String
    type: Attribute.String & Attribute.Unique
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users'
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
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3
      }>
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    provider: Attribute.String
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: Attribute.String & Attribute.Private
    confirmationToken: Attribute.String & Attribute.Private
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    applications: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::application.application'
    >
    avatar: Attribute.Media<'images'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'plugin::users-permissions.user', 'oneToOne', 'admin::user'>
  }
}

export interface PluginSchedulerScheduler extends Schema.CollectionType {
  collectionName: 'scheduler_scheduler'
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
    uid: Attribute.String & Attribute.Required
    entryId: Attribute.BigInteger & Attribute.Required
    type: Attribute.Enumeration<['publish', 'archive']> & Attribute.Required
    datetime: Attribute.DateTime
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::scheduler.scheduler', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::scheduler.scheduler', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginEmailDesignerEmailTemplate extends Schema.CollectionType {
  collectionName: 'email_templates'
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
    templateReferenceId: Attribute.Integer & Attribute.Unique
    design: Attribute.JSON
    name: Attribute.String
    subject: Attribute.String
    bodyHtml: Attribute.Text
    bodyText: Attribute.Text
    enabled: Attribute.Boolean & Attribute.DefaultTo<true>
    tags: Attribute.JSON
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'plugin::email-designer.email-template',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
  }
}

export interface PluginSitemapSitemap extends Schema.CollectionType {
  collectionName: 'sitemap'
  info: {
    singularName: 'sitemap'
    pluralName: 'sitemaps'
    displayName: 'sitemap'
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
    sitemap_string: Attribute.Text & Attribute.Required
    name: Attribute.String & Attribute.Required & Attribute.DefaultTo<'default'>
    type: Attribute.Enumeration<['default_hreflang', 'index']> &
      Attribute.DefaultTo<'default_hreflang'>
    delta: Attribute.Integer & Attribute.DefaultTo<1>
    link_count: Attribute.Integer
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::sitemap.sitemap', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::sitemap.sitemap', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface PluginSitemapSitemapCache extends Schema.CollectionType {
  collectionName: 'sitemap_cache'
  info: {
    singularName: 'sitemap-cache'
    pluralName: 'sitemap-caches'
    displayName: 'sitemap-cache'
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
    sitemap_json: Attribute.JSON & Attribute.Required
    name: Attribute.String & Attribute.Required & Attribute.DefaultTo<'default'>
    sitemap_id: Attribute.Integer & Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'plugin::sitemap.sitemap-cache', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'plugin::sitemap.sitemap-cache', 'oneToOne', 'admin::user'> &
      Attribute.Private
  }
}

export interface ApiAboutPageAboutPage extends Schema.SingleType {
  collectionName: 'about_pages'
  info: {
    singularName: 'about-page'
    pluralName: 'about-pages'
    displayName: 'About Page'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    test: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::about-page.about-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::about-page.about-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::about-page.about-page',
      'oneToMany',
      'api::about-page.about-page'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::about-page.about-page',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::about-page.about-page', 'oneToOne', 'admin::user'>
  }
}

export interface ApiApplicationApplication extends Schema.CollectionType {
  collectionName: 'applications'
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
    open_position: Attribute.Relation<
      'api::application.application',
      'manyToOne',
      'api::open-position.open-position'
    >
    users_permissions_user: Attribute.Relation<
      'api::application.application',
      'manyToOne',
      'plugin::users-permissions.user'
    >
    documents: Attribute.Media<'files' | 'videos' | 'audios' | 'images', true>
    email: Attribute.Email & Attribute.Required
    state: Attribute.Enumeration<['submitted', 'responded', 'draft', 'accepted', 'rejected']> &
      Attribute.DefaultTo<'submitted'>
    name: Attribute.String & Attribute.Required
    start: Attribute.Date
    motivation: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    cv: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    additional: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    url: Attribute.UID & Attribute.Required
    howDidYouFindThis: Attribute.String
    position: Attribute.String
    collaborators: Attribute.Relation<
      'api::application.application',
      'manyToMany',
      'api::collaborator.collaborator'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::application.application', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::application.application', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::application.application',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::application.application', 'oneToOne', 'admin::user'>
  }
}

export interface ApiBlogAuthorBlogAuthor extends Schema.CollectionType {
  collectionName: 'blog_authors'
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
    firstName: Attribute.String
    lastName: Attribute.String
    image: Attribute.Media<'images'>
    bio: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    email: Attribute.Email
    blog_posts: Attribute.Relation<
      'api::blog-author.blog-author',
      'manyToMany',
      'api::blog-post.blog-post'
    >
    team_members: Attribute.Relation<
      'api::blog-author.blog-author',
      'oneToMany',
      'api::team-member.team-member'
    >
    twitter: Attribute.String
    github: Attribute.String
    orcid: Attribute.String
    slug: Attribute.UID<'api::blog-author.blog-author', 'lastName'>
    seo: Attribute.Component<'shared.seo'>
    summary: Attribute.Text
    personalWebsite: Attribute.String
    linkedIn: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::blog-author.blog-author', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::blog-author.blog-author', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::blog-author.blog-author',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::blog-author.blog-author', 'oneToOne', 'admin::user'>
  }
}

export interface ApiBlogHomeBlogHome extends Schema.SingleType {
  collectionName: 'blog_homes'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::blog-home.blog-home', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::blog-home.blog-home', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::blog-home.blog-home',
      'oneToMany',
      'api::blog-home.blog-home'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::blog-home.blog-home',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::blog-home.blog-home', 'oneToOne', 'admin::user'>
  }
}

export interface ApiBlogPostBlogPost extends Schema.CollectionType {
  collectionName: 'blog_posts'
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
    title: Attribute.String & Attribute.Required & Attribute.Unique
    image: Attribute.Media<'images'> & Attribute.Required
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    excerpt: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200
      }>
    blog_authors: Attribute.Relation<
      'api::blog-post.blog-post',
      'manyToMany',
      'api::blog-author.blog-author'
    >
    publishDate: Attribute.DateTime
    slug: Attribute.UID<'api::blog-post.blog-post', 'title'>
    blog_tags: Attribute.Relation<'api::blog-post.blog-post', 'manyToMany', 'api::tag.tag'>
    seo: Attribute.Component<'shared.seo'>
    related: Attribute.Relation<'api::blog-post.blog-post', 'oneToMany', 'api::blog-post.blog-post'>
    team_members: Attribute.Relation<
      'api::blog-post.blog-post',
      'manyToMany',
      'api::team-member.team-member'
    >
    academic: Attribute.Component<'shared.academic'>
    category: Attribute.Relation<'api::blog-post.blog-post', 'manyToOne', 'api::category.category'>
    doi: Attribute.String & Attribute.Unique
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::blog-post.blog-post', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::blog-post.blog-post', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::blog-post.blog-post',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::blog-post.blog-post', 'oneToOne', 'admin::user'>
  }
}

export interface ApiCategoryCategory extends Schema.CollectionType {
  collectionName: 'categories'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: Attribute.UID & Attribute.Required
    blog_posts: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::blog-post.blog-post'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::category.category', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::category.category', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::category.category',
      'oneToMany',
      'api::category.category'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<'api::category.category', 'oneToOne', 'admin::workflow-stage'>
    strapi_assignee: Attribute.Relation<'api::category.category', 'oneToOne', 'admin::user'>
  }
}

export interface ApiCollaboratorCollaborator extends Schema.CollectionType {
  collectionName: 'collaborators'
  info: {
    singularName: 'collaborator'
    pluralName: 'collaborators'
    displayName: 'Collaborator'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    title: Attribute.String & Attribute.Required
    logo: Attribute.Media<'images'> & Attribute.Required
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    startDate: Attribute.Date
    endDate: Attribute.Date
    teamMembers: Attribute.Relation<
      'api::collaborator.collaborator',
      'manyToMany',
      'api::team-member.team-member'
    >
    url: Attribute.String & Attribute.Required
    collaborationProject: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::collaborator.collaborator', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::collaborator.collaborator', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::collaborator.collaborator',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::collaborator.collaborator', 'oneToOne', 'admin::user'>
  }
}

export interface ApiDonatePageDonatePage extends Schema.SingleType {
  collectionName: 'donate_pages'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::donate-page.donate-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::donate-page.donate-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::donate-page.donate-page',
      'oneToMany',
      'api::donate-page.donate-page'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::donate-page.donate-page',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::donate-page.donate-page', 'oneToOne', 'admin::user'>
  }
}

export interface ApiGlobalGlobal extends Schema.SingleType {
  collectionName: 'globals'
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
    siteName: Attribute.String & Attribute.Required
    defaultSeo: Attribute.Component<'shared.seo'> & Attribute.Required
    favicon: Attribute.Media<'images' | 'files' | 'videos'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::global.global', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::global.global', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<'api::global.global', 'oneToOne', 'admin::workflow-stage'>
    strapi_assignee: Attribute.Relation<'api::global.global', 'oneToOne', 'admin::user'>
  }
}

export interface ApiHomepageHomepage extends Schema.SingleType {
  collectionName: 'homepages'
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
    seo: Attribute.Component<'shared.seo'>
    hero: Attribute.Component<'sections.hero'> & Attribute.Required
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::workflow-stage'>
    strapi_assignee: Attribute.Relation<'api::homepage.homepage', 'oneToOne', 'admin::user'>
  }
}

export interface ApiJoteArticleJoteArticle extends Schema.CollectionType {
  collectionName: 'jote_articles'
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
    title: Attribute.String
    abstract: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    published: Attribute.DateTime
    submitted: Attribute.DateTime
    accepted: Attribute.DateTime
    image: Attribute.Media<'images' | 'files' | 'videos'>
    jote_article_category: Attribute.Relation<
      'api::jote-article.jote-article',
      'oneToOne',
      'api::jote-article-category.jote-article-category'
    >
    doi: Attribute.String & Attribute.Unique
    url: Attribute.String
    guid: Attribute.UID & Attribute.Required
    references: Attribute.JSON
    authors: Attribute.JSON
    keywords: Attribute.JSON
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::jote-article.jote-article', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::jote-article.jote-article', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::jote-article.jote-article',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::jote-article.jote-article', 'oneToOne', 'admin::user'>
  }
}

export interface ApiJoteArticleCategoryJoteArticleCategory extends Schema.CollectionType {
  collectionName: 'jote_article_categories'
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
    title: Attribute.String & Attribute.Required & Attribute.Unique
    invited: Attribute.Boolean
    doiPrefix: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 5
      }>
    slug: Attribute.UID<'api::jote-article-category.jote-article-category', 'title'> &
      Attribute.Required
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::jote-article-category.jote-article-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::jote-article-category.jote-article-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::jote-article-category.jote-article-category',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<
      'api::jote-article-category.jote-article-category',
      'oneToOne',
      'admin::user'
    >
  }
}

export interface ApiJoteAuthorJoteAuthor extends Schema.CollectionType {
  collectionName: 'jote_authors'
  info: {
    singularName: 'jote-author'
    pluralName: 'jote-authors'
    displayName: 'JOTE Author'
  }
  options: {
    draftAndPublish: true
  }
  attributes: {
    firstName: Attribute.String
    lastName: Attribute.String
    title: Attribute.String
    email: Attribute.Email
    orcid: Attribute.String
    affiliation: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::jote-author.jote-author', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::jote-author.jote-author', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::jote-author.jote-author',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::jote-author.jote-author', 'oneToOne', 'admin::user'>
  }
}

export interface ApiLegalPageLegalPage extends Schema.SingleType {
  collectionName: 'legal_pages'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    documents: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::legal-page.legal-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::legal-page.legal-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::legal-page.legal-page',
      'oneToMany',
      'api::legal-page.legal-page'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::legal-page.legal-page',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::legal-page.legal-page', 'oneToOne', 'admin::user'>
  }
}

export interface ApiOpenPositionOpenPosition extends Schema.CollectionType {
  collectionName: 'open_positions'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    type: Attribute.Enumeration<['internship', 'volunteer', 'part-time', 'full-time']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    startDate: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    paid: Attribute.Boolean &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.DefaultTo<false>
    needToHave: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    moreInfoMail: Attribute.Email &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.DefaultTo<'info@trialanderror.org'>
    image: Attribute.Media<'images'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: Attribute.UID<'api::open-position.open-position', 'title'> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    vacancies: Attribute.Integer &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.DefaultTo<1>
    applyUrl: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    applications: Attribute.Relation<
      'api::open-position.open-position',
      'oneToMany',
      'api::application.application'
    >
    niceToHave: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    whatYoullDo: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    location: Attribute.Enumeration<['remote', 'Utrecht']> &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.DefaultTo<'remote'>
    summary: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      Attribute.SetMinMaxLength<{
        maxLength: 300
      }>
    twitterPost: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    linkedinPost: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    futureCoworkers: Attribute.Relation<
      'api::open-position.open-position',
      'manyToMany',
      'api::team-member.team-member'
    >
    deadline: Attribute.Date &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    timeCommitment: Attribute.String &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    whatWeOffer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    finalWords: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::open-position.open-position', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::open-position.open-position', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::open-position.open-position',
      'oneToMany',
      'api::open-position.open-position'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::open-position.open-position',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<
      'api::open-position.open-position',
      'oneToOne',
      'admin::user'
    >
  }
}

export interface ApiOpenPositionsPageOpenPositionsPage extends Schema.SingleType {
  collectionName: 'open_positions_pages'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    noPositionsText: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::open-positions-page.open-positions-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::open-positions-page.open-positions-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::open-positions-page.open-positions-page',
      'oneToMany',
      'api::open-positions-page.open-positions-page'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::open-positions-page.open-positions-page',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<
      'api::open-positions-page.open-positions-page',
      'oneToOne',
      'admin::user'
    >
  }
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    block: Attribute.DynamicZone<['components.text-block']> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    image: Attribute.Media<'images'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    slug: Attribute.String &
      Attribute.Unique &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> & Attribute.Private
    localizations: Attribute.Relation<'api::page.page', 'oneToMany', 'api::page.page'>
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::workflow-stage'>
    strapi_assignee: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'>
  }
}

export interface ApiPositionPosition extends Schema.CollectionType {
  collectionName: 'positions'
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
    title: Attribute.String & Attribute.Required & Attribute.Unique
    description: Attribute.RichText
    email: Attribute.Email
    department: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::position.position', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::position.position', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<'api::position.position', 'oneToOne', 'admin::workflow-stage'>
    strapi_assignee: Attribute.Relation<'api::position.position', 'oneToOne', 'admin::user'>
  }
}

export interface ApiTagTag extends Schema.CollectionType {
  collectionName: 'tags'
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
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 25
      }>
    slug: Attribute.UID<'api::tag.tag', 'title'>
    blog_posts: Attribute.Relation<'api::tag.tag', 'manyToMany', 'api::blog-post.blog-post'>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'> & Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::workflow-stage'>
    strapi_assignee: Attribute.Relation<'api::tag.tag', 'oneToOne', 'admin::user'>
  }
}

export interface ApiTeamMemberTeamMember extends Schema.CollectionType {
  collectionName: 'team_members'
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
    firstName: Attribute.String & Attribute.Required
    lastName: Attribute.String
    email: Attribute.Email
    bio: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      >
    image: Attribute.Media<'images' | 'files' | 'videos'>
    show_pronouns: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>
    pronouns: Attribute.String & Attribute.Required
    azureID: Attribute.String & Attribute.Unique
    twitter: Attribute.String & Attribute.Unique
    github: Attribute.String & Attribute.Unique
    orcid: Attribute.String & Attribute.Unique
    personalWebsite: Attribute.String
    position: Attribute.String & Attribute.Required
    department: Attribute.Enumeration<
      ['Editorial', 'Board', 'IT', 'Design', 'Outreach', 'Production']
    >
    slug: Attribute.UID<'api::team-member.team-member', 'lastName'>
    seo: Attribute.Component<'shared.seo'>
    linkedin: Attribute.String
    blog_author: Attribute.Relation<
      'api::team-member.team-member',
      'manyToOne',
      'api::blog-author.blog-author'
    >
    blog_posts: Attribute.Relation<
      'api::team-member.team-member',
      'manyToMany',
      'api::blog-post.blog-post'
    >
    summary: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
          maxLengthCharacters: 400
        }
      >
    relatedOpenPositions: Attribute.Relation<
      'api::team-member.team-member',
      'manyToMany',
      'api::open-position.open-position'
    >
    color: Attribute.String & Attribute.CustomField<'plugin::color-picker.color'>
    mastodon: Attribute.String
    Team: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Developers',
          'Journal',
          'Publishers',
          'Training',
          'Research',
          'Board',
          'Supervisory Board',
          'Operational, Facility, and Support',
        ]
      >
    dateJoined: Attribute.Date
    collaborators: Attribute.Relation<
      'api::team-member.team-member',
      'manyToMany',
      'api::collaborator.collaborator'
    >
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::team-member.team-member', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::team-member.team-member', 'oneToOne', 'admin::user'> &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::team-member.team-member',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::team-member.team-member', 'oneToOne', 'admin::user'>
  }
}

export interface ApiTeamPageTeamPage extends Schema.SingleType {
  collectionName: 'team_pages'
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
    seo: Attribute.Component<'shared.seo'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default'
        }
      > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    publishedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'api::team-page.team-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    updatedBy: Attribute.Relation<'api::team-page.team-page', 'oneToOne', 'admin::user'> &
      Attribute.Private
    localizations: Attribute.Relation<
      'api::team-page.team-page',
      'oneToMany',
      'api::team-page.team-page'
    >
    locale: Attribute.String
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::team-page.team-page',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<'api::team-page.team-page', 'oneToOne', 'admin::user'>
  }
}

export interface ApiUpdateCategoryUpdateCategory extends Schema.CollectionType {
  collectionName: 'update_categories'
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
    title: Attribute.String & Attribute.Required
    symbol: Attribute.Media<'images'> & Attribute.Required
    in: Attribute.String
    inurl: Attribute.String
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<
      'api::update-category.update-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    updatedBy: Attribute.Relation<
      'api::update-category.update-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private
    sitemap_exclude: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>
    strapi_stage: Attribute.Relation<
      'api::update-category.update-category',
      'oneToOne',
      'admin::workflow-stage'
    >
    strapi_assignee: Attribute.Relation<
      'api::update-category.update-category',
      'oneToOne',
      'admin::user'
    >
  }
}

export interface AdminAuditLog extends Schema.CollectionType {
  collectionName: 'strapi_audit_logs'
  info: {
    singularName: 'audit-log'
    pluralName: 'audit-logs'
    displayName: 'Audit Log'
  }
  options: {
    draftAndPublish: false
    timestamps: false
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
    action: Attribute.String & Attribute.Required
    date: Attribute.DateTime & Attribute.Required
    user: Attribute.Relation<'admin::audit-log', 'oneToOne', 'admin::user'>
    payload: Attribute.JSON
    createdAt: Attribute.DateTime
    updatedAt: Attribute.DateTime
    createdBy: Attribute.Relation<'admin::audit-log', 'oneToOne', 'admin::user'> & Attribute.Private
    updatedBy: Attribute.Relation<'admin::audit-log', 'oneToOne', 'admin::user'> & Attribute.Private
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'admin::transfer-token': AdminTransferToken
      'admin::transfer-token-permission': AdminTransferTokenPermission
      'admin::workflow': AdminWorkflow
      'admin::workflow-stage': AdminWorkflowStage
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::content-releases.release': PluginContentReleasesRelease
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction
      'plugin::entity-notes.note': PluginEntityNotesNote
      'plugin::menus.menu': PluginMenusMenu
      'plugin::menus.menu-item': PluginMenusMenuItem
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'plugin::scheduler.scheduler': PluginSchedulerScheduler
      'plugin::email-designer.email-template': PluginEmailDesignerEmailTemplate
      'plugin::sitemap.sitemap': PluginSitemapSitemap
      'plugin::sitemap.sitemap-cache': PluginSitemapSitemapCache
      'api::about-page.about-page': ApiAboutPageAboutPage
      'api::application.application': ApiApplicationApplication
      'api::blog-author.blog-author': ApiBlogAuthorBlogAuthor
      'api::blog-home.blog-home': ApiBlogHomeBlogHome
      'api::blog-post.blog-post': ApiBlogPostBlogPost
      'api::category.category': ApiCategoryCategory
      'api::collaborator.collaborator': ApiCollaboratorCollaborator
      'api::donate-page.donate-page': ApiDonatePageDonatePage
      'api::global.global': ApiGlobalGlobal
      'api::homepage.homepage': ApiHomepageHomepage
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
      'admin::audit-log': AdminAuditLog
    }
  }
}
