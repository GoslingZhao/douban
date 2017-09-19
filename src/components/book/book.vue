<template>
	<div id="book">
		<swipe class="my-swipe">
			<swipe-item class="slide1"></swipe-item>
			<swipe-item class="slide2"></swipe-item>
			<swipe-item class="slide3"></swipe-item>
		</swipe>
		<ul class="custom-list">
			<li v-for="item in books">
				<div class="img"><img :src="item.book.image"/></div>
				<div class="list-text-container">
					<span>{{item.book.title}}</span>
					<p>作者：{{item.book.author_intro | captureAuthor}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import axios from "axios"
import { Swipe, SwipeItem} from 'vue-swipe'
Swipe.auto= false;
export default {
	components:{
		'Swipe': Swipe,
		'swipe-item':SwipeItem
	},

  name: 'book',

  data () {
    return {
    	books:[],
    	flag: true
    };
  },
  mounted:function(){
  	this.loadMore()
  },
  methods: {
    loadMore: function() {
        axios.get(API_PROXY+'https://api.douban.com/v2/book/user/alex1504/collections')
        .then(function(res) {
          this.books = res.data.collections;
          this.flag = false;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  filters:{
    captureAuthor: function(val){
      return val ? val.slice(0,20)+"..." : "未知"
    }
  }
};
</script>

<style lang="scss" scoped>
#book{
	box-sizing: border-box;
	padding: 0.64rem 0;
	text-align: center;
	.my-swipe{
		height: 2rem;
		color: #fff;
		font-size: 0.3rem;
		text-align: center;
		.mint-swipe-item{
			width: 100%;
			height: 2rem;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: cover;
			position: absolute;
		}
		.mint-swipe-items-wrap{
			height: 100% !important;
		}
	}
	.slide1 {
    background: url('https://img3.doubanio.com/lpic/s27102925.jpg');
    color: #fff;
  }

  .slide2 {
    background: url('https://img3.doubanio.com/lpic/s6989253.jpg');
    color: #000;
  }

  .slide3 {
    background: url('https://img3.doubanio.com/lpic/s24468373.jpg');
    color: #fff;
  }
}
.custom-list{
	font-size: 0.16rem;
	li{
		padding: 0.4rem 0.16rem;
		list-style: none;
	}

	div{
		float: left;
	}
	.img{
		width: 0.4rem;
		margin-right: 0.16rem;
		img{
			width: 100%;
			height: 0.4rem;
			border-radius: 50%;
		}
	}
	.list-text-container{
		width: 75%;
		text-align: left;
		border-bottom: 1px solid #ccc;
		p{
			padding-bottom: 0.16rem;
			color: rgba(0,0,0,0.54);
			font-size: 0.14rem;
			white-space: normal;
		}
	}
}
</style>