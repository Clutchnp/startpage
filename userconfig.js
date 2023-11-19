const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Kolkata, Asia',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      d: ['https://duckduckgo.com/?q=', 'DuckDuckGo'],
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    
    {
      name: "chi ll",
      background_url: "src/img/banners/bg-1.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "twitter",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#7daea3",
          },
          {
            name: "primevideo",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
        ],
      }],
    },
    
    {
      name: "myself",
      background_url: "src/img/banners/bg-2.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "onedrive",
              url: "https://onedrive.live.com",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: 'DEV',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/archlinux/',
              url: 'https://www.reddit.com/r/archlinux'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },

        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
