import "../../public/assets/scss/app.scss";
import { useRouter } from "next/router";
import { withoutLayoutThemePath } from "Data/OthersPageData";
import { ToastContainer } from "react-toastify";
import { ProjectProvider } from "helper/project/ProjectProvider";
import "../../i18n";
import { TaskProvider } from "helper/Task/TaskProvider";
import LayoutProvider from "helper/Layout/LayoutProvider";
import Layout from "../layout";
import { BookmarkProvider } from "helper/Bookmark/BookmarkProvider";
import { CustomizerProvider } from "helper/Customizer/CustomizerProvider";
import TodoListProvider from "helper/TodoList/TodoListProvider";
import ContactProvider from "helper/Contacts/ContactProvider";
import NoSsr from "utils/NoSsr";
import { AuthProvider } from "../context/AuthContext";

const Myapp = ({ Component, pageProps }: any) => {
  const getLayout =Component.getLayout || ((page: any) => <Layout>{page}</Layout>);
  const router = useRouter();
  const currentUrl = router.asPath;
  let updatedPath;
  if(currentUrl.includes("?")){
    const tempt=currentUrl
     updatedPath=tempt.split("?")[0]
  }else{
    updatedPath=currentUrl
  }

  return (
    <NoSsr>
      <AuthProvider>
        {withoutLayoutThemePath.includes(updatedPath) ? (
          <Component {...pageProps} />
        ) : (
          <CustomizerProvider>
            <TodoListProvider>
              <ProjectProvider>
                <LayoutProvider>
                  <TaskProvider>
                    <BookmarkProvider>
                      <ContactProvider>
                        {getLayout(<Component {...pageProps} />)}
                      </ContactProvider>
                    </BookmarkProvider>
                  </TaskProvider>
                </LayoutProvider>
              </ProjectProvider>
            </TodoListProvider>
          </CustomizerProvider>
        )}
        <ToastContainer />
      </AuthProvider>
    </NoSsr>
  );
};

export default Myapp;
