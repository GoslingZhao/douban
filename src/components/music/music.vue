<template>
	<div id="music">
		<ul>
			<li v-for="(album,index) of albums">
			<img class="album-img" :src="album.bg" @click="showList(index)"/>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios"
import Store from "../../assets/js/storage.js"
export default {

  name: 'music',

  data () {
    return {
    	albums:[
			{
				name: "飙升榜",
				id:19723756,
				bg: require("./img/soar_music.jpg")
			},
			{
				name: "新歌榜",
				id:3779629,
				bg:require("./img/new_music.jpg")
			},
			{
				name: "原创榜",
				id:2884035,
				bg:require("./img/original_music.jpg")
			},
			{
				name: "KTV麦榜",
				id:21845217,
				bg:require("./img/ktv_music.jpg")
			},
			{
				name: "华语金曲榜",
				id:4395559,
				bg:require("./img/chinese_music.jpg")
			},
			{
				name: "我的专辑",
				id:98833242,
				bg:require("./img/my_music.jpg")
			},
		]
    };
  },
  methods:{
  	showList(index){
  		this.$router.push({name:'music-list',params:{
  			listId:this.albums[index].id}
  		})
  		Store.set('activeListId',this.albums[index].id);
  	}
  }
};
</script>

<style lang="scss" scoped>
#music{ 
	ul{
		padding-top: 0.64rem;
		li{
			width: 1.875rem;
			height: 1.875rem;
			float: left;
			list-style: none;
		}
		img{
			width: 100%;
		}
	}
	
}
</style>