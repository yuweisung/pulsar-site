/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import {
  NavbarSecondaryMenuFiller,
  ThemeClassNames,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common";
import DocSidebarItems from "@theme/DocSidebarItems";
import styles from "./styles.module.css";
import DocsVersionDropdownNavbarItem from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";

// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = ({ sidebar, path, docsPluginId }) => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
      <DocsVersionWrapperMemo docsPluginId={docsPluginId} />
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === "category" && item.href) {
            mobileSidebar.toggle();
          }

          if (item.type === "link") {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
  );
};

function DocSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

function DocsVersionWrapper(props) {
  return (
    <div className={styles.sidebarVersionSwitch}>
      Version:
      <DocsVersionDropdownNavbarItem
        docsPluginId={props.docsPluginId}
        dropdownItemsBefore={[]}
        dropdownItemsAfter={[]}
        items={["Master", "Legacy"]}
      />
    </div>
  );
}

const DocsVersionWrapperMemo = React.memo(DocsVersionWrapper);

export default React.memo(DocSidebarMobile);
