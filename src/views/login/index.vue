<template>
  <div>
    <div class="content">
      <!-- 登录盒子 -->
      <div class="content_1">
        <!-- 标题 -->
        <div class="content_1_1">管理员登录</div>
        <!-- 表单 -->
        <el-form :model="loginParams" :rules="loginRules" ref="loginRules">
          <!-- 单个 -->
          <el-form-item prop="username">
            <!-- 输入框 -->
            <el-input v-model="loginParams.username" placeholder="请输入用户名" />
          </el-form-item>
          <!-- 单个 -->
          <el-form-item prop="password">
            <!-- 输入框 -->
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
import { login } from '../../utils/api'
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
      // 非空校验
      this.$refs.loginRules.validate((valid) => {
        // 验证通过
        if (valid) {
          // 加载中
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          // 登录接口
          login(this.loginParams).then(res => {
            // 存储token
            localStorage.setItem('userInfo', res.data)
            // 关闭加载
            loading.close();
            // 路由跳转
            this.$router.push({ path: '/index' })
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