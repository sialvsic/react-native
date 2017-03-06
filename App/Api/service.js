import axios from 'axios';


export default {
  getBlogs: function() {
    return axios.get('https://api.cnblogs.com/api/blogposts/@sitehome', {
      headers: {
        'Authorization': 'bearer UcfInMz24neeF7aXEOSMLEkDnkHbO60vkC42aQTjDbwW8Y5MHj2sErDMjmq-KYjxgepL2pNxXZ2hhgpZ6W75kVimiy0TmP6XVM6SkOIbROEtqL0dVa_1dtaujXIe9HCY3rBnO_grc_XshVREbkLdzaqqwidKH0GIRKjm-fXd8WRFDasGKQ8WoWX4kPacCq0HLqFjph8KT2n5byEwShkbXg'
      },
      params: {
        'pageIndex': 1,
        'pageSize': 20
      }
    });
  }
}