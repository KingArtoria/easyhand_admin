<template>
  <div>
    <div class="content">
      <!-- 登录盒子 -->
      <div class="content_1">
        <!-- 标题 -->
        <div class="content_1_1">管理员登录</div>
        <el-form :model="loginParams" :rules="loginRules" ref="loginRules">
          <el-form-item prop="username">
            <el-input v-model="loginParams.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginParams.password" type="password" placeholder="请输入密码" />
          </el-form-item>
        </el-form>
        <!-- 按钮 -->
        <div class="content_1_3" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from '@/utils/api'
export default {
  data() {
    return {
      // 登录参数
      loginParams: {
        username: '',
        password: ''
      },
      // 登录验证规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 登录
    login() {
      this.$refs.loginRules.validate((valid) => {
        if (valid) {
          // 登录API
          login(this.loginParams).then(res => {
            console.log(res)
          })
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>