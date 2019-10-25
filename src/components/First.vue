<template>
	<div class="total">
		<!-- 表格的头部 -->
		<div class="top">
			<!-- <el-button type="primary" class="edit">+添加</el-button>
			<el-button type="primary" >-批量删除</el-button>
			<h6>可以修改信息呦</h6> -->
			<div class="demo">
			  <div class="left">
				  <el-button type="primary" class="edit">+添加</el-button>
				  <el-button type="primary" >-批量删除</el-button>
			  </div>
			  <div class="right"><h6>可以修改信息呦</h6></div>
			</div>
			<!-- 表格设置 -->
			<el-table
				:data="tableData"
				style="width: 100%"
				ref="multipleTable"
				>
				<!-- 选择框 -->
					 <el-table-column
							width="180"
							type="selection">
						</el-table-column>
				<el-table-column
					prop="name"
					label="姓名"
					width="180">
				</el-table-column>
				<el-table-column
					prop="tel"
					label="手机">
				</el-table-column>
				<el-table-column
					prop="Email"
					label="邮箱">
				</el-table-column>
				<el-table-column
					prop="WX"
					label="微信">
				</el-table-column>
				<el-table-column
					prop="beiZhu"
					label="备注">
				</el-table-column>
				<el-table-column
					prop="caoZuo"
					label="操作">
					<div class="box">
					<el-button type="edit" class=" item-edit">编辑</el-button>
					<el-button type="delete" class="item-delete">删除</el-button>
					</div>
				</el-table-column>
			</el-table>
		</div>
		<div class="buttom">
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="currentPage4"
			  :page-sizes="[5, 10, 15, 20]"
			  :page-size="100"
			  layout="total, sizes, prev, pager, next, jumper"
			  :total="3">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		// 页码
		methods: {
			handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			}
		},
		data () {
			
			return {
				// 页码
				currentPage4: 4,
				// 选择框
				checked:true,
				// 添加的数据
				tableData: [{
						 data: '',
							name: '王小虎',
							tel: '1545134154',
							Email:'121512346@qq.com',
							WX:'快乐的小鸟',
							beiZhu:"-",
							
						},
						{
								 data: '',
									name: '白芷',
									tel: '1134567891',
									Email:'1513421@qq.com',
									WX:'植物',
									beiZhu:"-",
									
								},
						{
								 data: '',
									name: '紫苏',
									tel: '245614451',
									Email:'112512012@qq.com',
									WX:'紫苏',
									beiZhu:"-",
									
								},
								{
										 data: '',
											name: '甜甜',
											tel: '1134567891',
											Email:'111122@qq.com',
											WX:'天天',
											beiZhu:"-",
											
										}
						
				],
				 options: [{
						value: 'HTML',
						label: 'HTML'
					}, {
						value: 'CSS',
						label: 'CSS'
					}, {
						value: 'JavaScript',
						label: 'JavaScript'
					}],
					value: []
			}
		}
		
	}
</script>

<style scoped>
	/* 按钮颜色设置 */
		#select{
			margin-top: 13px;
		}
		h6{
			color: red;
		}
		.demo{
			display: flex;
		}
		.demo .left{
		  /* width:px; */
		  min-width:200px;
		  max-width:200px;
		  height:auto;
		  /* background:#B4D3F7; */
		  flex-grow:0;
		}
		  
		.demo .right{
		  margin-left:10px;
		  width:auto;
		  height:50px;
		  margin-top:-15px;
		  flex-grow:1;
		}
		/* 下面选框信息 */
		.buttom{
			margin: 10px 0px;
			float: right;
			margin-right: 100px;
			
		}
		.total{
			border: 1px solid gainsboro;
			
		}
		

</style>
