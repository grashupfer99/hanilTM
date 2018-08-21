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
      name: '이벤트',
      url: '/icons',
      icon: 'icon-calendar',
      children: [
        {
          name: '현황',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
        },
        {
          name: '운영(주최)하기',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: '결과',
          url: '/icons/font-awesome',
          icon: 'icon-star',
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
      icon: 'icon-bullhorn',
      children: [
        {
          name: '비밀번호 관리',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: '로그아웃',
          url: '/notifications/badges',
          icon: 'icon-account-logout',
        },
      ],
    },
    {
      name: '설정',
      url: '/widgets',
      icon: 'icon-calculator',
      children: [
        {
          name: '레벨',
          url: '/notificatinos/alerts',
          icon: 'icon-calculator'
        },
        {
          name: '한일리그',
          url: '/notificatinos/alerts',
          icon: 'icon-calculator'
        },
        {
          name: '분석',
          url: '/notificatinos/alerts',
          icon: 'icon-calculator'
        },
        {
          name: '씬스케줄',
          url: '/notificatinos/alerts',
          icon: 'icon-calculator'
        },
      ]
    },
    // {
    //   divider: true,
    // },
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
    // {
    //   name: 'Download CoreUI',
    //   url: 'http://coreui.io/react/',
    //   icon: 'icon-cloud-download',
    //   class: 'mt-auto',
    //   variant: 'success',
    // },
    // {
    //   name: 'Try CoreUI PRO',
    //   url: 'http://coreui.io/pro/react/',
    //   icon: 'icon-layers',
    //   variant: 'danger',
    // },
  ],
};
