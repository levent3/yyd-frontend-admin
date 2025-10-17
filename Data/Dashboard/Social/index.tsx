export const SocialProfileStatus = [
  {
    title: "Posts",
    active: "1,908",
  },
  {
    title: "Followers",
    active: "34.0k",
  },
  {
    title: "Following",
    active: "897",
  },
];

export const SocialWidgetData = [
  {
    title: "Facebook",
    image: "1.png",
    gros: 22.9,
    total: "12,098",
    subTitle: "Followers",
    status: "success",
    sm: 6,
    chart: {
      color: ["var(--theme-deafult)"],
      series: [78],
    },
  },
  {
    title: "Instagram",
    image: "2.png",
    gros: 27.4,
    total: "15,080",
    subTitle: "Followers",
    status: "success",
    sm: 6,
    chart: {
      color: ["#FFA941"],
      series: [70],
    },
  },
  {
    title: "Twitter",
    image: "3.png",
    gros: 14.09,
    total: "12,564",
    subTitle: "Followers",
    status: "success",
    chart: {
      color: ["#57B9F6"],
      series: [50],
    },
  },
];

export const SmallWidgetsData = [
  {
    title: "Photo Clicks",
    total: 76,
    gros: "+72.9",
    textColor: "success",
    chart: {
      series: [
        {
          name: "photo",
          data: [10, 12, 41, 36, 60, 58],
        },
      ],
      color: "#54BA4A",
    },
  },
  {
    title: "Link Clicks",
    total: 89,
    gros: "79.9",
    textColor: "danger",
    chart: {
      series: [
        {
          name: "photo",
          data: [10, 12, 41, 36, 60, 58],
        },
      ],
      color: "var(--theme-secondary)",
    },
  },
];

export const AllCampaignsTable = {
  header: [
    {
      class: "f-light",
      name: "AD Platform",
    },
    {
      class: "f-light",
      name: "Campaign",
    },
    {
      class: "f-light",
      name: "GEO",
    },
    {
      class: "f-light",
      name: "Profitability",
    },
    {
      class: "f-light",
      name: "Max Participation Avai.",
    },
    {
      class: "f-light",
      name: "Status",
    },
    {
      class: "f-light",
      name: "Create",
    },
  ],
  body: [
    {
      ADPlatform: "facebook",
      icon: "facebook",
      campaign: "Jane Cooper",
      GEO: "UK",
      profitability: 45.6,
      maxParticipation: "9,786",
      status: "Active",
    },
    {
      ADPlatform: "instagram",
      icon: "instagram",
      campaign: "Floyd Miles",
      GEO: "DE",
      profitability: 12.3,
      maxParticipation: "19,7098",
      status: "Active",
    },
    {
      ADPlatform: "pinterest",
      icon: "pinterest",
      campaign: "Guy Hawkins",
      GEO: "ES",
      profitability: 65.6,
      maxParticipation: "90,986",
      status: "Active",
    },
    {
      ADPlatform: "twitter",
      icon: "twitter",
      campaign: "Travis Wright",
      GEO: "ES",
      profitability: 35.6,
      maxParticipation: "23,654",
      status: "Inactive",
    },
    {
      ADPlatform: "you-tube",
      icon: "youtube-play",
      campaign: "Mark Green",
      GEO: "UK",
      profitability: 45.6,
      maxParticipation: "12,796",
      status: "Inactive",
    },
  ],
};
