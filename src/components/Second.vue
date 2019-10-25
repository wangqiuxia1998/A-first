<template>
	<div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="活动区域" prop="region">
				<el-select v-model="ruleForm.region" placeholder="请选择活动模块">
					<el-option label="模块一" value="shanghai"></el-option>
					<el-option label="模块二" value="beijing"></el-option>
				</el-select>
				<el-select v-model="ruleForm.region2" placeholder="请选择活动区域">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="触发条件" prop="chuFa" >
				<el-select v-model="ruleForm.chuFa" placeholder="请选择活动模块">
					<el-option label="条件一" value="shanghai"></el-option>
					<el-option label="条件二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="保存规则" prop="delivery">
				<el-radio v-model="radio" label="1">保存</el-radio>
				<el-radio v-model="radio" label="2">不保存</el-radio>
			</el-form-item>
			<el-form-item label="报警方式" prop="type">
				<el-checkbox-group v-model="ruleForm.type">
					<el-checkbox label="短信" name="type"></el-checkbox>
					<el-checkbox label="微信" name="type"></el-checkbox>
					<el-checkbox label="邮件" name="type"></el-checkbox>
					
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="状态" prop="delivery">
				<el-radio v-model="zhuangTai" label="1">启用</el-radio>
				<el-radio v-model="zhuangTai" label="2">未启用</el-radio>
			</el-form-item>
			<!-- 穿梭器设置 -->
			<el-form-item label="特殊" prop="resource">
				<div style="text-align: center">
					<el-transfer
					  style="text-align: left; display: inline-block"
					  v-model="value"
					  filterable
					  :left-default-checked="[2, 3]"
					  :right-default-checked="[1]"
					  :titles="['Source', 'Target']"
					  :button-texts="['到左边', '到右边']"
					  :format="{
						noChecked: '${total}',
						hasChecked: '${checked}/${total}'
					  }"
					  
					  @change="handleChange"
					  :data="data"
					  >
					  <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
					  <el-button class="transfer-footer" slot="left-footer" size="small">+新建联系人</el-button>
					  
					</el-transfer>
				</div>
			</el-form-item>
			<el-form-item label="活动形式" prop="desc">
				<el-input  v-model="ruleForm.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
		
	</div>
</template>

<script>
	export default {
		data() {
			// 穿梭框
			const generateData = _ => {
				const data = [];
				for (let i = 1; i <= 29; i++) {
					data.push({
					key: i,
					label: `备选项 ${ i }`,
					// disabled: i % 4 === 0
				  });
			}
			return data;
		};
			return {
				// 穿梭框
				data: generateData(),
				value: [1],
				value4: [1],
				
				radio:'1',
				zhuangTai:'1',
				ruleForm: {
					name: '',
					region: '',
					delivery: true,
					type: [],
					resource: '',
					desc: ''
				},
				//保存提示功能 
				rules: {
					name: [{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 5,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur'
						}
					],
					region: [{
						required: true,
						message: '请选择活动模块',
						trigger: 'change'
					}],
					region2: [{
						required: true,
						message: '请选择活动区域',
						trigger: 'change'
					}],
					chuFa: [{
						required: true,
						message: '请选触发条件',
						trigger: 'change'
					}],
					type: [{
						type: 'array',
						required: true,
						message: '请至少选择一个活动性质',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			handleChange(value, direction, movedKeys) {
				console.log(value, direction, movedKeys);
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped="scoped">
.transfer-footer {
    margin-left: 5px;
    padding: 6px 5px;
  }
  
</style>
