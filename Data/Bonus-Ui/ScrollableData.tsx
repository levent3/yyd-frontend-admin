import { BadgeScrolltype, ProfileListType } from "Types/BonusUiType";
import { ScrollableListType } from "Types/UikitesType";
import Image from "next/image";
import { Col } from "reactstrap";
import { Bestwebsiteideas, BothScrollText, BothScrollText2, BothScrollText3, BothScrollText4, BothScrollText5, BothScrollText6, ImgPath, Latesttrends, ThebestUXdesigner } from "utils/Constant";

export const BadgeScrollData: BadgeScrolltype[] = [
    {
        text: 'Stella Nowland',
        class: 'bg-warning',
        badge: 'Freelance'
    },
    {
        text: 'Lola Stanford',
        class: 'bg-danger text-white',
        badge: 'Issue'
    },
    {
        text: 'Caitlin Coungeau',
        class: 'bg-primary text-white',
        badge: 'Social'
    },
    {
        text: 'Graciela W. McClaran',
        class: 'bg-danger text-white',
        badge: 'Issue'
    },
    {
        text: 'Derek T. Aldridge',
        class: 'bg-warning text-white',
        badge: 'Freelance '
    },
    {
        text: 'Annie A. Riley',
        class: 'bg-primary text-white',
        badge: 'Social '
    },
    {
        text: 'Hana J. Boyd',
        class: 'bg-danger text-white',
        badge: 'Issue'
    },
    {
        text: 'Karen R. Pryce',
        class: 'bg-warning text-white',
        badge: 'Freelance'
    },
    {
        text: 'Cordie C. Pope',
        class: 'bg-primary text-white',
        badge: 'Social'
    }
]

export const ProfileScrollData: ProfileListType[] = [
    {
        img: '/user/3.png',
        text: 'Gloria D. Acheson'
    },
    {
        img: '/user/2.jpg',
        text: 'Sharon C. Obrien'
    },
    {
        img: '/user/5.jpg',
        text: 'Bryan A. Owens'
    },
    {
        img: '/user/12.png',
        text: 'Ronald M. Enger'
    },
    {
        img: '/user/14.png',
        text: 'Herbert A. Clary'
    },
    {
        img: '/user/6.jpg',
        text: 'Dino A. Cannon'
    },
    {
        img: '/user/3.jpg',
        text: 'Danny A. McLean'
    },
    {
        img: '/user/2.jpg',
        text: 'Betty K. Curtis'
    }
]
export const ScrollableContentData: ScrollableListType[] = [
    {
        img: '/user/9.jpg',
        head: 'Molly Boake',
        mail: 'MollyBoake@rhyta.com',
        small: '5 days ago'
    },
    {
        img: '/user/10.jpg',
        head: 'Gabrielle Fahey',
        mail: 'GabrielleFahey@dayrep.com',
        small: '10 days ago'
    },
    {
        img: '/user/2.jpg',
        head: 'Lucinda Moseley',
        mail: 'LucindaMoseley@teleworm.us',
        small: '3 days ago'
    },
    {
        img: '/user/12.png',
        head: 'Francis K. Henriques',
        mail: 'FrancisKHenriques@teleworm.us',
        small: '2 days ago'
    },
    {
        img: '/user/14.png',
        head: 'Jose A. Seay',
        mail: 'JoseASeay@rhyta.com',
        small: '15 days ago'
    },
    {
        img: '/user/3.jpg',
        head: 'Phil F. Cunningham',
        mail: 'PhilFCunningham@dayrep.com',
        small: '6 days ago'
    },
    {
        img: '/user/7.jpg',
        head: 'Richard E. Johnson',
        mail: 'RichardEJohnson@teleworm.us',
        small: '20 days ago'
    },
    {
        img: '/user/2.png',
        head: 'Lawrence L. Nash',
        mail: 'LawrenceLNash@jourrapide.com',
        small: '8 days ago'
    }
]

export const HorizontalData: { img: string }[] = [
    {
        img: '/scrollbar/fashion1.jpg'
    },
    {
        img: '/scrollbar/fashion2.jpg'
    },
    {
        img: '/scrollbar/fashion3.jpg'
    },
    {
        img: '/scrollbar/fashion4.jpg'
    },
    {
        img: '/scrollbar/fashion5.jpg'
    },
    {
        img: '/scrollbar/fashion6.jpg'
    }
]

export const BothsideScroll: { text: string | JSX.Element }[] = [
    {
        text: <>
            <div className="visible-wrapper">
                <Image src={`${ImgPath}/banner/2.jpg`} alt="office-work" width={100} height={100} />
            </div>
            <p className="pt-3">Inspiration can take many different forms, and <em className="txt-danger">professional growth never stops</em>{BothScrollText3}<br />--&gt; Responsive...<br />--&gt; Secure your domain...<br />--&gt; Testing...<br />--&gt; Content creation...<br />--&gt; Visual elements...<br />--&gt; Launch...</p>
        </>
    },
    {
        text: <>
            <h6 className="pb-2">{Latesttrends}</h6>
            <p>{BothScrollText}</p>
            <p>{BothScrollText2}</p>
            <div className="visible-wrapper">
                <Image src={`${ImgPath}/email/3.jpg`} alt="office" width={100} height={100} />
            </div>

        </>
    },
    {
        text: <>
            <h6 className="pb-2">{ThebestUXdesigner}</h6>
            <p>{BothScrollText4}</p>
            <p>{BothScrollText5}<br /><strong>1. Muzli </strong><br /><strong>2. Facebook Design </strong><br /><strong>3. Awwwards</strong><br /></p>
            <p>{BothScrollText6}</p>
        </>
    },
    {
        text: <>
            <h6 className="pb-2">{Bestwebsiteideas}</h6>
            <div className="visible-wrapper">
                <Image src={`${ImgPath}/banner/3.jpg`} alt="website" width={100} height={100} />
            </div>
            <p className="pt-3">--&gt; Blog <br />--&gt; Portfolio website <br />--&gt; Event website <br />--&gt; personal website <br />--&gt; Fashion website <br />--&gt; Admin dashboards <br />--&gt; E-commerce website <br />--&gt; Beauty website <br />--&gt; Food website<br />--&gt; Animation website <br />--&gt; Financial website</p>
        </>
    }
]