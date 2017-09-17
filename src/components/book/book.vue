<template>
	<div id="book">
		<swipe class="my-swipe">
			<swipe-item class="slide1"></swipe-item>
			<swipe-item class="slide2"></swipe-item>
			<swipe-item class="slide3"></swipe-item>
		</swipe>
		<ul class="custom-list">
			<li>
				<div class="img"><img /></div>
				<div class="list-text-container">
					<span>asdkha</span>
					<p>作者：我是谁 | 你是谁</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
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

    };
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
		padding: 0.28rem 0.16rem;
	}

	div{
		float: left;
	}
	.img{
		width: 20%;
		margin-right: 0.16rem;
		background: red;
	}
	.list-text-container{
		width: 75%;
		text-align: left;
		border-bottom: 1px solid #ccc;
		p{
			padding-bottom: 0.16rem;
		}
	}
}
</style>