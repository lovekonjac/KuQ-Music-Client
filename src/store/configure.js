const configure = {
  state: {
    HOST: "http://localhost:8888", //后台访问地址根目录
    activeName: "", //当前选中的菜单名
    showAside: false, //是否显示播放中的歌曲列表
    loginIn: false, //是否登录
    isActive: false//当前歌曲是否收藏
  },
  getters: {
    isActive: state => {
        let isActive = state.isActive
        if (!isActive) {
          isActive = JSON.parse(window.sessionStorage.getItem('isActive') || null)
        }
        return isActive
      },
    activeName: (state) => {
      let activeName = state.activeName;
      if (!activeName) {
        activeName = JSON.parse(window.sessionStorage.getItem("activeName"));
      }
      return activeName;
    },
    showAside: (state) => {
      let showAside = state.showAside;
      if (!showAside) {
        showAside = JSON.parse(
          window.sessionStorage.getItem("showAside") || null
        );
      }
      return showAside;
    },
    loginIn: (state) => {
      let loginIn = state.loginIn;
      if (!loginIn) {
        loginIn = JSON.parse(window.sessionStorage.getItem("loginIn") || null);
      }
      return loginIn;
    },
  },
  mutations: {
    setIsActive: (state, isActive) => {
        state.isActive = isActive
        window.sessionStorage.setItem('isActive', JSON.stringify(isActive))
      },
    setActiveName: (state, activeName) => {
      state.activeName = activeName;
      window.sessionStorage.setItem("activeName", JSON.stringify(activeName));
    },
    setShowAside: (state, showAside) => {
      state.showAside = showAside;
      window.sessionStorage.setItem("showAside", JSON.stringify(showAside));
    },
    setLoginIn: (state, loginIn) => {
      state.loginIn = loginIn;
      window.sessionStorage.setItem("loginIn", JSON.stringify(loginIn));
    },
  },
};

export default configure;