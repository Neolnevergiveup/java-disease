<template>
  <div class="test">
    <el-upload
      :action="url"
      :data="{aa: 'aaa'}"
      ref="upload"
      :accept="'image/*'"
      list-type="picture-card"
      :auto-upload="false"
      :file-list="fileList"
      :on-change="change"
      :on-preview="handlePictureCardPreview"
      :before-remove="beforeRemove"
      :before-upload="beforeAvatarUpload"
      :on-success="success"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <el-button type="primary" @click="submitUpload">上传</el-button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: [],
        url: ''
      };
    },
    methods: {
      /**
       * 显示放大后的图片
       */
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      /**
       * 移除图片所显示的弹框
       */
      beforeRemove (file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`);
      },
      /**
       * 移除图片后所调用的钩子
       */
      handleRemove (file, fileList) {
        console.log(file, fileList);
      },
      /**
       * 限制用户上传的图片格式和大小。
       */
      beforeAvatarUpload (file) {
        const isJPG = /^image/.test(file.type);
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      /**
       * 文件改变时所调用的钩子
       */
      change (file, fileList) {
        const isJPG = /^image/.test(file.raw.type);
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      /**
       * 手动上传到服务器
       */
      submitUpload () {
        console.log(this.$refs);
        this.$refs.upload.submit();
      },
      /**
       * 上传成功时所调用的钩子
       */
      success (response, file, fileList) {
      }
    },
    mounted: function () {
      this.url = 'http://192.168.1.182:4002/test/img';
    }
  };
</script>

<style scoped lang="scss">
  .test{
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
</style>
