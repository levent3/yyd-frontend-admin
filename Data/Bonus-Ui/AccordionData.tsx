import { FlushDatatype, IconDataType, OutlineDataType } from "Types/BonusUiType";
import { Elementswebdesign, SimpleAccordionText, SimpleAccordionText1, SimpleAccordionText2, Usewebdesign, Webdesignersdo } from "utils/Constant";

export const FlushData: FlushDatatype[] = [
    {
        id: 'flush1',
        head: 'What is bootstrap?',
        text: <p> {"--> Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website."}<br />{"--> It is absolutely free to download and use."}</p>

    },
    {
        id: 'flush2',
        head: 'Why Should You Use Bootstrap?',
        text: <p>{"First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started."}<br />{"One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them."}<br />{"You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access. "}<br />{"To increase the site's page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects."}</p>

    },
    {
        id: 'flush3',
        head: 'Bootstrap Image System',
        text: <p>{"Bootstrap handles the image display and responsiveness with its predefined HTML and CSSrules."}<br />{"Adding the .img-responsive class will automatically resize images based on theusers' screen size. This will benefit your website’s performance, as reducing image sizes ispart of the site optimization process."}<br />{"Bootstrap also provides additional classes likeimg-circle and .img-rounded, which help to modify the images' shape."}</p>

    }
]

export const iconDemoData: IconDataType[] = [
    {
        id: 'icon1',
        icon: 'Bell',
        head: ' Keep in touch',
        text:
            <p>
                <em className="txt-danger"> {'" This page might not behave as expected because Windows Internet Explorer'}
                    {"isn't"} {'configured to load unsigned ActiveX controls."'}</em> {'or "Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer." (Both phrased as conditions that may cause future problems.)'}
            </p>


    },
    {
        id: 'icon2',
        icon: 'MessageCircle',
        head: ' Chats with others',
        text:
            <p>
                {"You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails."}<br /><strong> {'Chat:'}</strong>{" Use when you prefer a dedicated chat experience and don't mind switching between different apps."}
            </p>

    },
    {
        id: 'icon3',
        icon: 'CheckSquare',
        head: ' Right way to code ',
        text:
            <p>
                {"1) Decide on the indentation and keep it that way."}<br />
                {"2) Make comments."}<br />
                {"3) Consistent name scheme."}<br />
                {"4) Don't repeat code."}<br />
                {"5) Avoid writing long code lines."}<br />
                {"6) Break down a big task into smaller chunks."}<br />
                {"7) Organize your program into smaller files."}<br />
                {"8) Write clever code that is also readable."}
            </p>

    }
]

export const OutlineData: OutlineDataType[] = [
    {
        id: 'outline1',
        head: Webdesignersdo,
        text: SimpleAccordionText
    },
    {
        id: 'outline2',
        head: Usewebdesign,
        text: SimpleAccordionText1
    },
    {
        id: 'outline3',
        head: Elementswebdesign,
        text: SimpleAccordionText2
    }
]