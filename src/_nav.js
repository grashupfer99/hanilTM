export default {
  items: [
    {
      title: true,
      name: '관리자 페이지',
      wrapper: {
        element: '',
        attributes: {},
      },
      class: 'nav-title'
    },
    {
      name: 'HOME',
      url: '/home',
      icon: 'fa fa-home',
    },
    // {
    //   name: '관리자 페이지',
    //   url: '/dashboard',
    //   icon: 'fa fa-dashboard',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
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
      icon: 'fa fa-sitemap',
    },
    {
      name: '실적 관리',
      url: '/theme/typography',
      icon: 'fa fa-sliders',
      children: [
        {
          name: '청약 정보 실시간 등록',
          url: '/base/breadcrumbs',
          icon: 'fa fa-hand-pointer-o',
        },
        {
          name: '실적 정보 대량 등록',
          url: '/base/cards',
          icon: 'fa fa-info-circle',
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
      icon: 'fa fa-sticky-note'
    },
    {
      name: '성과 분석',
      url: '/buttons',
      icon: 'fa fa-signal',
      children: [
        {
          name: '전체',
          url: '/buttons/buttons',
          icon: 'fa fa-list-ul',
        },
        {
          name: '그룹&실',
          url: '/buttons/button-dropdowns',
          icon: 'fa fa-group',
        },
        {
          name: '개인',
          url: '/buttons/button-groups',
          icon: 'fa fa-user',
        },
      ],
    },
    {
      name: '리그',
      url: '/charts',
      icon: 'fa fa-star',
      children: [
        {
          name: '현황',
          url: '/buttons/buttons',
          icon: 'fa fa-area-chart',
        },
        {
          name: '도전하기',
          url: '/buttons/button-dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: '운영(주최)하기',
          url: '/buttons/button-groups',
          icon: 'fa fa-hdd-o',
        },
        {
          name: '결과',
          url: '/buttons/button-groups',
          icon: 'fa fa-bar-chart',
        },
      ],
    },
    {
      name: '이벤트',
      url: '/icons',
      icon: 'fa fa-calendar',
      children: [
        {
          name: '현황',
          url: '/icons/coreui-icons',
          icon: 'fa fa-area-chart',
        },
        {
          name: '운영(주최)하기',
          url: '/icons/flags',
          icon: 'fa fa-hdd-o',
        },
        {
          name: '결과',
          url: '/icons/font-awesome',
          icon: 'fa fa-bar-chart',
          // badge: {
          //   variant: 'secondary',
          //   text: '4.7',
          // },
        },
      ],
    },
    {
      name: '계정관리',
      url: '/notifications',
      icon: 'fa fa-vcard-o',
      children: [
        {
          name: '비밀번호 관리',
          url: '/notifications/alerts',
          icon: 'fa fa-lock',
        },
        {
          name: '로그아웃',
          url: '/notifications/badges',
          icon: 'fa fa-sign-out',
        },
      ],
    },
    {
      name: '설정',
      url: '/widgets',
      icon: 'icon-settings',
      children: [
        {
          name: '레벨',
          url: '/notificatinos/alerts',
          icon: 'fa fa-line-chart'
        },
        {
          name: '한일리그',
          url: '/notificatinos/alerts',
          icon: 'fa fa-trophy'
        },
        {
          name: '분석',
          url: '/notificatinos/alerts',
          icon: 'fa fa-pie-chart'
        },
        {
          name: '씬스케줄',
          url: '/notificatinos/alerts',
          icon: 'fa fa-list-alt'
        },
      ]
    },
    {
      divider: true,
    },
    // {
    //   title: true,
    //   name: 'Extras',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    {
      title: true,
      name: 'HOME',
      class: 'mt-auto',
    },
    {
      name: '실장 1',
      url: 'http://coreui.io/react/',
      icon: 'icon-user',
      // class: 'mt-auto',
      variant: 'success',
    },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'http://coreui.io/pro/react/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    // },
  ],
};
