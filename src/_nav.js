export default {
  items: [
    {
      name: '관리자 페이지',
      url: '/dashboard',
      icon: 'icon-speedometer',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW',
      // },
    },
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: '조직 관리',
      url: '/theme/colors',
      icon: 'icon-settings',
    },
    {
      name: '실적 관리',
      url: '/theme/typography',
      icon: 'icon-chart',
      children: [
        {
          name: '청약 정보 실시간 등록',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: '실적 정보 대량 등록',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
      ]
    },
    // {
    //   title: true,
    //   name: 'Components',
    //   wrapper: {
    //     element: '',
    //     attributes: {},
    //   },
    // },
    {
      name: '게시판',
      url: '/base',
      icon: 'icon-info'
    },
    {
      name: '성과 분석',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: '전체',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: '그룹&실',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: '개인',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: '리그',
      url: '/charts',
      icon: 'icon-pie-chart',
      children: [
        {
          name: '현황',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: '도전하기',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: '운영(주최)하기',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: '결과',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
    },
  ],
};
