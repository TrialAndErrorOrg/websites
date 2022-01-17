/**
 *
 * LeftMenu
 *
 */

import React, { useMemo, useState } from "react";
import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
} from "@strapi/design-system/SubNav";
import { useSelector, shallowEqual } from "react-redux";
import { useIntl } from "react-intl";
import matchSorter from "match-sorter";
import sortBy from "lodash/sortBy";
import toLower from "lodash/toLower";
import getTrad from "../../../utils/getTrad";
import { makeSelectModelLinks } from "../selectors";

console.log("hihi");
const matchByTitle = (links, search) =>
  matchSorter(links, toLower(search), {
    keys: [(item) => toLower(item.title)],
  });

const LeftMenu = () => {
  const [search, setSearch] = useState("");
  const { formatMessage } = useIntl();
  const modelLinksSelector = useMemo(makeSelectModelLinks, []);
  const { collectionTypeLinks, singleTypeLinks } = useSelector(
    (state) => modelLinksSelector(state),
    shallowEqual
  );

  const toIntl = (links) =>
    links.map((link) => {
      return {
        ...link,
        title: formatMessage({ id: link.title, defaultMessage: link.title }),
      };
    });

  const intlCollectionTypeLinks = toIntl(collectionTypeLinks);
  const intlSingleTypeLinks = toIntl(singleTypeLinks);

  const categories = {
    Meta: ["Content-Content Interface", "Content-Update Interface"],
    Blog: ["Blog Author", "Blog Post", "Tag"],
    JOTE: ["JOTE Article", "JOTE Author", "JOTE Article Category", "Editor"],
    COTE: ["TeamMember", "Position"],
  };

  const links = intlCollectionTypeLinks.reduce((acc, curr) => {
    const entry = Object.entries(categories).find(([key, arr]) =>
      arr.includes(curr.title)
    );
    if (entry) {
      const [category, val] = entry;
      acc[category] = [...(acc[category] || []), curr];
      return acc;
    }
    acc.Misc = [...(acc.Misc || []), curr];

    return acc;
  }, {});

  const menus = Object.entries(links).map(([category, link]) => ({
    id: `${category}Types`,
    title: {
      id: getTrad(`components.LeftMenu.${category.toLowerCase()}-types`),
      defaultMessage: `${category}`,
    },
    searchable: true,
    links: sortBy(matchByTitle(link, search), (object) =>
      object.title.toLowerCase()
    ),
  }));

  const menu = [
    ...menus,
    {
      id: "collectionTypes",
      title: {
        id: getTrad("components.LeftMenu.collection-types"),
        defaultMessage: "Collection Types",
      },
      searchable: true,
      links: sortBy(matchByTitle(intlCollectionTypeLinks, search), (object) =>
        object.title.toLowerCase()
      ),
    },
    {
      id: "blogTypes",
      title: {
        id: getTrad("components.LeftMenu.blog-types"),
        defaultMessage: "Blog",
      },
      searchable: true,
      links: sortBy(
        matchByTitle(matchByTitle(intlCollectionTypeLinks, search), "blog"),
        (object) => object.title.toLowerCase()
      ),
    },
    {
      id: "singleTypes",
      title: {
        id: getTrad("components.LeftMenu.single-types"),
        defaultMessage: "Single Types",
      },
      searchable: true,
      links: sortBy(matchByTitle(intlSingleTypeLinks, search), (object) =>
        object.title.toLowerCase()
      ),
    },
  ];

  const handleClear = () => {
    setSearch("");
  };

  const handleChangeSearch = ({ target: { value } }) => {
    setSearch(value);
  };

  const label = formatMessage({
    id: getTrad("header.name"),
    defaultMessage: "Content",
  });

  console.log(
    sortBy(
      matchByTitle(matchByTitle(intlCollectionTypeLinks, search), "blog"),
      (object) => object.title.toLowerCase()
    )
  );

  return (
    <SubNav ariaLabel={label}>
      <SubNavHeader
        label={label}
        searchable
        value={search}
        onChange={handleChangeSearch}
        onClear={handleClear}
        searchLabel={formatMessage({
          id: "content-manager.components.LeftMenu.Search.label",
          defaultMessage: "Search for a content type",
        })}
      />
      <SubNavSections>
        {menu.map((section) => {
          const label = formatMessage(
            {
              id: section.title.id,
              defaultMessage: section.title.defaultMessage,
            },
            section.title.values
          );

          return (
            <SubNavSection
              key={section.id}
              label={label}
              badgeLabel={section.links.length.toString()}
            >
              {section.links.map((link) => {
                const search = link.search ? `?${link.search}` : "";

                return (
                  <SubNavLink key={link.uid} to={`${link.to}${search}`}>
                    {link.title}
                  </SubNavLink>
                );
              })}
            </SubNavSection>
          );
        })}
      </SubNavSections>
    </SubNav>
  );
};

export default LeftMenu;
