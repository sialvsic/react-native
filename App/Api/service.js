import axios from 'axios';


const headers = {
  'Authorization': 'bearer SPzZgCog1SPUPAXiVEnrNTfQMxRzLi0uB26jmWlwz_YPp-5Cpr8Hlr3i-U_RxUffnUfa3rbZY9j5QvPu2d4_qUki9Fpb0GGQzr7-AknUVji70YDk7G9rkoTdm_QjA-Hxe2Ed37_jB_rACEam5fSc-78mVD662yg1XO-Dbc7sypbFm41wkcqIzlOfwK-c-cd-yM4PJtCx8G4dsCDtsf_bvA'
};

export default {
  getBlogs: function() {
    return axios.get('https://api.cnblogs.com/api/blogposts/@sitehome', {
      headers,
      params: {
        'pageIndex': 1,
        'pageSize': 20
      }
    });
  },
  getBlogDetail: function(blogId) {
    return axios.get(`https://api.cnblogs.com/api/blogposts/${blogId}/body`, {
      headers
    });
  }
}