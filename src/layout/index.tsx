'use client'
import React, { ReactNode, useContext, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ThemeCustomizer from "./ThemeCustomizer";
import Footer from "CommonElements/Footer";
import CustomizerContext from "helper/Customizer";
import layoutContext, { searchableMenuType } from "helper/Layout";
import Head from "next/head";
import { sidebarItemType } from "Types/LayoutDataType";
import { MenuList } from "./Sidebar/menu";
import Loader from "./loader";
import NoSsr from "utils/NoSsr";
import Taptop from "./Taptop";

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  const { layout, setLayout } = useContext(CustomizerContext);
  const {
    sideBarToggle,
    setSideBarToggle,
    setSearchableMenu,
    setBookmarkList,
  } = useContext(layoutContext);

  const compactSidebar = () => {
    if (layout === "compact-wrapper") {
      if (window.innerWidth <= 1006) {
        setSideBarToggle(true);
      } else {
        setSideBarToggle(false);
      }
    } else if (layout === "horizontal-wrapper") {
      if (window.innerWidth <= 1006) {
        setSideBarToggle(true);
        setLayout("compact-wrapper");
      } else {
        setSideBarToggle(false);
        setLayout("horizontal-wrapper");
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);

  useEffect(() => {
    const suggestionArray: searchableMenuType[] = [];
    const bookmarkArray: searchableMenuType[] = [];
    let num = 0;

    const getAllLink = (item: sidebarItemType, icon: ReactNode) => {
      if (item.children) {
        item.children.map((ele: sidebarItemType) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggestionArray.push({
          icon: icon,
          title: item.title ? item.title : "",
          path: item.path ? item.path : "",
          bookmarked: item.bookmark ? item.bookmark : false,
          id: num,
        });
        if (item.bookmark) {
          bookmarkArray.push({
            icon: icon,
            title: item.title ? item.title : "",
            path: item.path ? item.path : "",
            bookmarked: item.bookmark,
            id: num,
          });
        }
      }
    };

    MenuList.forEach((item) => {
      item.Items?.map((child) => {
        getAllLink(child, child.icon);
      });
    });
    setSearchableMenu(suggestionArray);
    setBookmarkList(bookmarkArray);
  }, []);

  const handleOverlayClick = () => {
    if (sideBarToggle) {
      setSideBarToggle(false);
    }
  };

  return (
    <NoSsr>
      <Head>
        <title>Yeryüzü Doktorları - Yönetim Paneli</title>
        <style>{`
          /* Custom fixes for sidebar overlap */
          .modal {
            z-index: 1050 !important;
          }
          .modal-backdrop {
            z-index: 1040 !important;
          }
          .page-header {
            z-index: 99 !important;
          }
          .page-header .onhover-show-div,
          .page-header .profile-dropdown,
          .page-header .notification-dropdown,
          .page-header .cart-dropdown,
          .page-header .bookmark-flip {
            z-index: 100 !important;
          }
          .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            height: 100vh !important;
            width: 265px !important;
            z-index: 9 !important;
          }
          .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper.close_icon {
            width: 90px !important;
          }
          .page-wrapper.compact-wrapper .page-header {
            margin-left: 265px !important;
            width: calc(100% - 265px) !important;
            transition: all 0.3s ease !important;
          }
          .page-wrapper.compact-wrapper .page-header.close_icon {
            margin-left: 90px !important;
            width: calc(100% - 90px) !important;
          }
          .page-wrapper.compact-wrapper .page-body-wrapper .page-body {
            margin-left: 265px !important;
            margin-top: 80px !important;
            min-height: calc(100vh - 80px) !important;
            transition: all 0.3s ease !important;
            position: relative !important;
          }
          .page-wrapper.compact-wrapper .page-body-wrapper .footer {
            margin-left: 265px !important;
            transition: all 0.3s ease !important;
          }
          .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper.close_icon ~ .page-body {
            margin-left: 90px !important;
          }
          .page-wrapper.compact-wrapper .page-body-wrapper div.sidebar-wrapper.close_icon ~ .footer {
            margin-left: 90px !important;
          }
          .container-fluid {
            max-width: 100% !important;
          }
          .card {
            position: relative !important;
          }
        `}</style>
      </Head>
      {/* <Loader /> */}
      <div
        className={`page-wrapper ${sideBarToggle ? "compact-wrapper" : layout}`}
      >
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          {children}
          <Footer />
        </div>
      </div>
      <ThemeCustomizer />
      <Taptop />
    </NoSsr>
  );
};

export default Layout;
