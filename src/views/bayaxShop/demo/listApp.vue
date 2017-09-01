<template>
	<div id="app">
			<mu-appbar class="heads" >
				<span class="icon-bayax  icon-menu" slot="left"></span>
				<!-- <img class="icon-bayax  icon-menu" slot="left"></span> -->
				<!-- <mu-flat-button label="expand_more" slot="right" /> -->
				<span class="icon icon-bayax icon-search" slot="right"></span>
				<span class="icon icon-bayax icon-shopping_cart" slot="right"></span>
			</mu-appbar>


			  <!-- 轮播图 -->
        <section class="slides-bayax">
            <mt-swipe :auto="4000" class="swipe">
                <mt-swipe-item v-for="item in slides">
                    <a href="../product/product.html">
          <img v-bind:src="item.url"></a>
                </mt-swipe-item>
            </mt-swipe>
        </section>
	</div>
</template>

<script>

import Lib from 'assets/js/Lib';
import 'mint-ui/lib/style.css' //最嗨的是他这个直接引入的是一个css文件
// import { Cell, Group, Divider } from 'vux'
import Vue from 'vue';
// import { Swipe, SwipeItem } from 'mint-ui';
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// Vue.use(MuseUI)
import 'muse-components/styles/base.less' // 加载基础的样式
import appBar from 'muse-components/appBar';
// import avatar from 'muse-ui/src/avatar'
// ..
Vue.component(appBar.name, appBar);
// Vue.component(avatar.name, avatar)

Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

export default {
	data() {
		return {
			// 轮播图
			slides: [
				{ url: 'http://ae01.alicdn.com/kf/HTB1Z6tVSVXXXXc2XpXXq6xXFXXXG.jpg_.webp"' },
				{ url: 'http://ae01.alicdn.com/kf/HTB1oSRsSVXXXXaAXFXXq6xXFXXX9.jpg_.webp' },
				{ url: 'http://ae01.alicdn.com/kf/HTB1xDt9SVXXXXaxXFXXq6xXFXXXN.jpg_.webp' },
				{ url: 'http://ae01.alicdn.com/kf/HTB1SZF0SVXXXXavXVXXq6xXFXXX1.jpg_.webp' },
			],
		}
	},
	components: {
		Swipe, SwipeItem
	},
	//实例初始化最之前，无法获取到data里的数据
	beforeCreate() {


	},
	//在挂载开始之前被调用
	beforeMount() {


	},
	//已成功挂载，相当ready()
	mounted() {



	},
	//相关操作事件
	methods: {




	}
}
</script>

<style >

.heads .icon{
	margin-right: 10px;
}




/*轮播图 */

.slides-bayax {
	margin-top: 56px;
	height: 8rem;
	min-height: 3.4375rem;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);
	/* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); */
	position: relative;
}

.slides-bayax img {
	height: 100%;
	width: 100%;
}

.slides-bayax .mint-swipe-indicators {
	bottom: 5px;
}

.slides-bayax .mint-swipe-indicator {
	opacity: 1;
	background-color: #eee;
}

.slides-bayax .mint-swipe-indicator.is-active {
	background-color: red;
}
</style>
