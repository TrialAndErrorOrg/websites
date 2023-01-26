select p.id::varchar(255) as id,
'post' as type,
p.title,
p.excerpt,
COALESCE(p.publish_date, p.published_at) as published,
p.slug as url,
p.slug as identifier,
array_to_json(array_agg(bt.title))::jsonb as tags,
c.title as category,
array_to_json(array_remove(
    array_agg(
      distinct jsonb_build_object(
          'firstName', ba.first_name,
          'lastName', ba.last_name,
          'image', jsonb_build_object(
            'url', f3.url,
            'width', f3.width,
            'height', f3.height,
            'alt', f3.alternative_text,
            'caption', f3.caption,
            'formats', f3.formats
          )
          )
      ) || array_agg(
        distinct jsonb_build_object(
          'firstName', tm.first_name,
          'lastName', tm.last_name,
          'image', jsonb_build_object(
            'url', f2.url,
            'width', f2.width,
            'height', f2.height,
            'alt', f2.alternative_text,
            'caption', f2.caption
            ,'formats', f2.formats
          )
        )
      ),
      jsonb_build_object(
        'firstName', null,
        'lastName', null,
        'image', jsonb_build_object(
            'url', null,
            'width', null,
            'height', null,
            'alt', null,
            'caption', null,
            'formats', null

          )
        )
    ))::jsonb as team
, jsonb_build_object(
    'url',f.url, 'width', f.width,
    'height', f.height,
    'alt', f.alternative_text,
    'caption', f.caption,
    'formats', f.formats,
    'blurhash', f.blurhash
    ) as image
from blog_posts p
LEFT OUTER JOIN blog_posts_blog_authors_links pal
on p.id = pal.blog_post_id
LEFT OUTER JOIN blog_authors ba
on pal.blog_author_id = ba.id
LEFT OUTER JOIN blog_posts_team_members_links pml
on p.id = pml.blog_post_id
LEFT OUTER JOIN team_members tm
ON pml.team_member_id = tm.id
LEFT OUTER JOIN blog_posts_blog_tags_links ptl
on p.id = ptl.blog_post_id
LEFT OUTER JOIN tags bt
ON ptl.tag_id = bt.id
left outer join files_related_morphs fp
on (p.id = fp.related_id and fp.related_type = 'api::blog-post.blog-post')
LEFT OUTER JOIN files f
on f.id=fp.file_id
left outer join files_related_morphs fp2
on (tm.id = fp2.related_id and fp2.related_type = 'api::team-member.team-member')
LEFT OUTER JOIN files f2
on f2.id=fp2.file_id
left outer join files_related_morphs fp3
on (ba.id = fp3.related_id and fp3.related_type = 'api::blog-author.blog-author')
LEFT OUTER JOIN files f3
on f3.id=fp3.file_id
LEFT OUTER JOIN blog_posts_category_links pcl
on p.id = pcl.blog_post_id
LEFT OUTER JOIN categories c
ON pcl.category_id = c.id
GROUP BY p.title, image, c.title, p.id, p.excerpt, p.publish_date, p.published_at, p.slug

UNION

select j.guid as id,
'article' as type,
j.title as title,
j.abstract as excerpt,
coalesce(j.published, j.published_at) as published,
j.url as url,
j.doi as identifier,
j.keywords as tags,
jc.title as category,
j.authors as authors,
jsonb_build_object(
  'url',f.url,
  'width', f.width,
  'height', f.height,
  'alt', f.alternative_text,
  'caption',f.caption,
  'formats', f.formats,
  'blurhash', f.blurhash
  ) as image
from jote_articles j
LEFT OUTER JOIN jote_articles_jote_article_category_links jcl
on j.id = jcl.jote_article_id
LEFT OUTER JOIN jote_article_categories jc
ON jcl.jote_article_category_id = jc.id
LEFT OUTER JOIN files_related_morphs fp
on (j.id = fp.related_id and fp.related_type = 'api::jote-article.jote-article')
LEFT OUTER JOIN files f on (f.id=fp.file_id and fp.related_type = 'api::jote-article.jote-article')
where j.published is not null

