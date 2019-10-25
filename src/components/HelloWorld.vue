<template>
  <div class="hello">
		<!-- 导航栏设置 -->
		<div class="top">
			<el-menu :default-active="activeIndex" router mode="horizontal"
				@select="handleSelect"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b">
				<el-menu-item index="/first">个人</el-menu-item>
				<el-menu-item index="/second" >小组</el-menu-item>
				<el-menu-item index="/third" ><el-link type="primary" disabled> 团队</el-link></el-menu-item>
				<el-menu-item index="/lianJie" >设置</el-menu-item>
				<!-- <el-link type="primary" disabled>主要链接</el-link> -->
			</el-menu>
		<rouer-link></rouer-link>	
		</div>
		<div class="buttom">
			<router-view/>
		</div>
		
		<!-- 下方设置 -->
		<!-- 表单提交——限定30字 -->
				
						<!-- <label>小宁</label> -->
						<!-- <el-input
							type="textarea"
							placeholder="请输入内容"
							v-model="textarea"
							maxlength="30"
							show-word-limit
						>
						</el-input> -->
						<!-- 点击提交按钮-->
						<!-- <el-button class="righgt"
							plain
							@click="open1">
							提交
						</el-button> -->
				
					<!-- <div id="a">
						
					</div> -->
					

	</div>
</template>


<script>
	export default {
		name: 'HelloWorld',
		data () {
			
			return {
				 activeIndex: '/first', 
				 // height: (document.documentElement.clientHeight - 80) + "px",
			}
		},
		methods: {
			// sz(){
			// 	this.$router.push({path:'/lianJie'})
			// },
			handleSelect(key, keyPath) {
			console.log(key, keyPath);
      }
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top{
	width: 100%;
	height: 80px;
}
.buttom{
	width: 100%;
}

	
</style>
