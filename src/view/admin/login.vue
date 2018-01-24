<template>
  <div class="login">
    <div class="login_content">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" @click="login()" @keyup.enter="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import * as THREE from 'three';
//  import Admin from '../../service/admin';
  export default {
    data () {
      return {
        labelPosition: 'right',
        winHeight: null,
        formLabelAlign: {
          username: '',
          password: ''
        },
        container: '',
        camera: '',
        scene: '',
        renderer: '',
        mouseX: 0,
        mouseY: 0,
        windowHalfX: 0,
        windowHalfY: 0,
        colors: []
      };
    },
    methods: {
      init () {
        this.container = document.createElement('div');
        this.container.style.width = window.innerWidth + 'px';
        this.container.style.height = window.innerHeight + 'px';
        document.querySelector('.login').appendChild(this.container);
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(100000, 0, 3200);
        this.scene = new THREE.Scene();

        this.colors = [ 0x000000, 0xff0080, 0x8000ff, 0xffffff ];
        let geometry = new THREE.Geometry();

        for (let i = 0; i < 2000; i++) {
          let vertex = new THREE.Vector3();
          vertex.x = Math.random() * 4000 - 2000;
          vertex.y = Math.random() * 4000 - 2000;
          vertex.z = Math.random() * 4000 - 2000;
          geometry.vertices.push(vertex);

          geometry.colors.push(new THREE.Color(this.colors[Math.floor(Math.random() * this.colors.length)]));
        }

        let material = new THREE.PointsMaterial({ size: 1, vertexColors: THREE.VertexColors, depthTest: false, opacity: 0.5, sizeAttenuation: false, transparent: true });

        let mesh = new THREE.Points(geometry, material);
        this.scene.add(mesh);

        this.renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.autoClearColor = false;
        this.container.appendChild(this.renderer.domElement);
        document.addEventListener('mousemove', this.onDocumentMouseMove, false);
        window.addEventListener('resize', this.onWindowResize, false);
      },
      onWindowResize () {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      },
      onDocumentMouseMove (event) {
        this.mouseX = (event.clientX - this.windowHalfX) * 10;
        this.mouseY = (event.clientY - this.windowHalfY) * 10;
      },
      animate () {
        requestAnimationFrame(this.animate);
        this.render();
      },
      render () {
        this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
      },
      /**
       * 登录
       */
      login () {
        this.$router.push('/report/disease');
//        Admin.login(this.formLabelAlign).then(res => {
//          if (res.errorCode === 0) {
//            localStorage.setItem('user', JSON.stringify(res.data));
//            localStorage.setItem('token', res.data.token);
//            this.$store.state.user = res.data;
//            this.$notify({title: '成功', message: '登录成功', type: 'success'});
//            this.$router.push('/');
//          } else {
//            this.$notify.error({title: '', message: res.message});
//          }
//        });
      }
    },
    mounted: function () {
      this.init();
      this.animate();
    }
  };
</script>

<style scoped lang="scss">
  @import "../../assets/scss/global";
  @import "./login.scss";
</style>
