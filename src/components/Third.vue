<template>
	<div id="app">
		<div class="content">
			<el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
				<el-tab-pane label="报警记录" name="first">
					<!-- 表单布局 -->
					<div class="all">
						<div class="left"></div>
						<div class="right">
							<el-form :inline="true" :model="formInline" class="demo-form-inline">
								<el-form-item label="设备:" style="margin-left: 30px;">
									<el-input v-model="formInline.user" size="mini"></el-input>
								</el-form-item>
								<el-form-item label="从机:">
									<el-select size="mini" v-model="formInline.region" placeholder="从机421">
										<el-option label="从机421"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="数据点:">
									<el-select size="mini" v-model="formInline.region" placeholder="电流">
										<el-option style="padding:1px 20% ;height: 36px;">
											<el-input size="mini" prefix-icon="el-icon-search" placeholder="请输入内容" v-model="input2">
											</el-input>
										</el-option>
										<!-- 插入单选按钮（没解决） -->
										<el-option style="height: 180px;padding-left:6px ;">
											<ul>
												<li>
													<el-radio v-model="radio" label="3">电流</el-radio><br />
												</li>
												<li>
													<el-radio v-model="radio" label="6">电阻</el-radio>
												</li>
												<li>
													<el-radio v-model="radio" label="9">开关</el-radio>
												</li>
												<li>
													<el-radio v-model="radio" label="12">功率</el-radio>
												</li>
												<li>
													<el-radio v-model="radio" label="15">温度</el-radio>
												</li>
											</ul>

										</el-option>
										<span style="margin: 20 auto; height: 20px;float: right;">
											<el-pagination @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="currentPage1"
											 layout=" prev, pager, next, total" :total="5">
											</el-pagination>
										</span>
									</el-select>
								</el-form-item>

								<el-form-item>
									<!-- 时间区域 -->
									<div class="block">
										<span class="demonstration">时间段:</span>
										<el-date-picker size="mini" v-model="value2" type="datetimerange" :picker-options="pickerOptions"
										 range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right">
										</el-date-picker>
									</div>
								</el-form-item>
								<el-form-item>
									<el-button size="mini" type="primary" @click="onSubmit">查询</el-button>

								</el-form-item>
								<el-form-item>
									<el-button size="mini" type="primary" @click="onSubmit" style="background-color: limegreen;">下载数据</el-button>
								</el-form-item>
							</el-form>
						</div>
					</div>

					<!-- 表格内容 -->
					<div class="middle">
						<el-table size="mini" :data="tableData" style="width: 100%">
							<el-table-column prop="name" label="设备名称" width="200">
							</el-table-column>
							<el-table-column prop="name2" label="从机名称" width="200">
							</el-table-column>
							<el-table-column prop="now" label="当前值" width="200">
							</el-table-column>
							<el-table-column prop="neiRong" label="报警内容" width="200">
							</el-table-column>
							<el-table-column prop="time" label="报警时间" width="200">
							</el-table-column>
							<el-table-column prop="zhuangTai" label="报警状态" width="200">
							</el-table-column>
							<el-table-column prop="caoZuo" label="操作" width="200">
							</el-table-column>
						</el-table>
					</div>
					<!-- 页码 -->
					<el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
					 :current-page="currentPage4" :page-sizes="[5, 10, 15, 20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
					 :total="0">
					</el-pagination>
				</el-tab-pane>

			</el-tabs>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				// 单选效果
				radio: '3',
				// 时间设置
				pickerOptions: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近七天',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近30天',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
				value2: [new Date(2019, 10, 10, 10, 10), new Date(2019, 10, 11, 10, 10)],
				// 页码
				currentPage4: 0,
				currentPage1: 0,
				activeName: 'first',
				formInline: {
					user: '',
					region: ''
				},
				
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			// 页码
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		},
	}
</script>

<style scoped>
	body,
	div,
	span,
	p,
	ol,
	ul,
	li,
	a {
		margin: 0;
		padding: 0;
	}

	#app {}

	.demo-form-inline {
		margin-left: 100px;
		display: flex;
		color: black;
	}

	.all {
		position: relative;
	}

	.left {
		/* background-color: red; */
		width: 80px;
		height: 5px;
		position: absolute;
		left: 0;
		top: 0;

	}

	.right {
		/* background-color: yellow; */
		height: 10 px;
		margin-left: 50px;
	}

	el-form-item {

		flex: 1;
	}

	/* 页码布局 */
	.pagination {
		margin: 10px 0px;
		float: right;
		margin-right: 100px;
	}
</style>
