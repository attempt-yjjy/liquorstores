<!-- 搜索页面 -->
<template>
    <div>
      <el-input v-model="search" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="Search">搜索</el-button>
    </div>
    
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
      return {
        restaurants: [],
        search: '',
        //原本展示数据
        list: [],
        // 搜索后的展示数据
        searchData: [],
        timeout:  null
      };
    },
    components: {},
    computed: {
        ...mapGetters(["getAddressList", "getLoginUser"])
    },
    methods: {
      loadAll() {
        return [
            //搜索框数据

        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    created() {
        // 获取的接口数据
        this.getList();
    },
    methods: {
        goback() {
            this.$router.go(-1);
        },

        // 获取接口中数据的方法
        getList() {
        let params = {
            id: this.getLoginUser.id,
            token_sc: this.getLoginUser.token_sc
        };
        api.AddressList(params).then(res => {
            // list 就是原始数据
            this.list = res.data;
        });
        },
    },
    Search() {
      // search 是 v-model="search" 的 search
      var search = this.search;
      if (search) {
        this.searchData = this.list.filter(function(product) {
          // 每一项数据
          // console.log(product)
          return Object.keys(product).some(function(key) {
            // 每一项数据的参数名
            // console.log(key)
            return (
              String(product[key])
                // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(search) > -1
            );
          });
        });
      }else if (search.length === 0){
          this.searchData = this.list;
      }else{
          return this.searchData;
      }
    }
};
</script>

<style>

</style>