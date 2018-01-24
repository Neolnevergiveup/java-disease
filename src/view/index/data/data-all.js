import DataService from '../../../service/dataService';
import { baseUrl } from '../../../config/env';
import { TYPECROPS } from '../../../mock/typeCrop';
export default {
  data () {
    return {
      searchCrop: '',
      dialogTableVisible: false,
      dialogFormVisible: false,
      input: '',
      show: false,
      dialogImageUrl: '',
      initShowUrl: false,
      dialogVisible: false,
      // showDisease: false,
      crop: {
        c_name: '',
        type: '',
        cropimg: ''
      },                        // 要添加作物的信息
      cropType: 'add',          // 增加作物 如果是updata 代表更改作物信息
      diseaseType: 'add',       // 增加病害 如果是updata 代表更改病害信息
      formLabelWidth: '120px',  // 添加作物弹框的长度
      upUrl: '',         // 上传图片的地址
      crops: [],         // 所有作物数组
      currentCrops: {},  // 选中当前作物
      dataAll: [],       // 所有数据(作物和病害)
      virusList: [],     // 当前作物的病害
      currentVirusName: '', // 下拉框病害的名字
      currentVirus: {},  // 选中当前作物
      fileList: [],       // 初始病害图片
      options: TYPECROPS   //枚举作物类型
    };
  },
  methods: {
    /**
     * 选择作物,更新病害信息
     */
    selectCropt (item) {
    //   this.currentCrops = item;
    //   this.virusList = this.dataAll.filter(data => this.currentCrops.c_name === data.c_name);
    //   this.currentVirus = this.virusList[0];
    //   let disease_id = this.currentVirus.disease_id;
    //   this.getVirusImg(disease_id);
    },
    /**
     * 添加作物
     */
    addCrop () {
      this.cropType = 'add';
      this.crop = {
          c_name: '',
          type: '',
          cropimg: ''
      };
      this.currentVirusName = '';
      this.dialogFormVisible = true;
    },
    /**
     * 删除作物
     */
    deleteCrop (item) {
    //   this.$confirm('此操作将永久删除该作物, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     let c_id = item.c_id;
    //     let token = localStorage.token;
    //     DataService.detaleCrop({c_id, token})
    //       .then(res => {
    //         if (res.errorCode === 0) {
    //           this.$message({type: 'success', message: '删除成功!'});
    //           this.crops.splice(this.crops.findIndex(res => res.c_id === item.c_id), 1);
    //         } else {
    //           this.$message.error(res.message);
    //         }
    //       });
    //   }).catch(() => {
    //     this.$message({type: 'info', message: '已取消删除'});
    //   });
    },
    /**
     * 更新作物信息
     */
    updataCrop (item) {
    //   this.dialogFormVisible = true;
    //   this.cropType = 'updata';
    //   this.crop = item;
    },
    /**
     * 保存作物
     */
    saveCrop () {
    //   let crop = this.crop;
    //   crop.token = localStorage.getItem('token');
    //   if (this.cropType === 'add') {
    //     DataService.addCrop(crop).then(res => {
    //       console.log(res);
    //       if (res.errorCode === 0) {
    //         this.crops.push(crop);
    //         this.$notify({title: '成功', message: '添加成功', type: 'success'});
    //         this.dialogFormVisible = false;
    //       } else {
    //         this.$notify.error({title: '失败', message: res.message, type: 'success'});
    //       }
    //     });
    //   } else if (this.cropType === 'updata') {
    //     let updataCrop = {
    //       token: crop.token,
    //       c_id: crop.c_id,
    //       c_name: crop.c_name,
    //       type: crop.type,
    //       cropimg: crop.cropimg
    //     };
    //     DataService.updapaCrop(updataCrop).then(res => {
    //       if (res.errorCode === 0) {
    //         this.$notify({title: '成功', message: '修改作物', type: 'success'});
    //         this.dialogFormVisible = false;
    //       } else {
    //         this.$notify.error({title: '失败', message: res.message, type: 'success'});
    //       }
    //     })
    //   }
    //
    },
    /**
     * 添加病害
     */
    addDisease () {
    //   this.upUrl = `${baseUrl}disease/addDisease`;
      this.diseaseType = 'add';
      this.currentVirus = {};
      this.currentVirusName = '';
      this.show = true;
    },
    /**
     * 选择病害
     */
    selectVirus () {
    //   this.currentVirus = this.virusList.filter(res => res.d_name === this.currentVirusName)[0];
    //   let disease_id = this.currentVirus.disease_id;
    //   this.getVirusImg(disease_id);
    },
      /**
       * 得到病害图片的地址
       */
    getVirusImg (disease_id) {
    //   let token = localStorage.getItem('token');
    //   let code = 3;
    //   this.initShowUrl = false;
    //   DataService.getImgUrl({token, code, disease_id})
    //     .then(response => {
    //       if (response.errorCode === 0) {
    //         if (response.imgUrl.length > 0) {
    //           response.imgUrl.forEach(res => {
    //             res.url = `http://192.168.1.144/nb2018/www${res.url}`;
    //             let name = res.url.toString().split('/').reverse();
    //             res.name = name[0];
    //           });
    //         }
    //         this.currentVirus.fileList = response.imgUrl;
    //         this.currentVirusName = this.currentVirus.d_name;
    //         this.initShowUrl = true;
    //       }
    //     })
    },
    /**
     * 更改病害信息
     */
    upDisease () {
    //   this.upUrl = `${baseUrl}disease/editDisease`;
    //   this.diseaseType = 'updata';
      this.show = true;
    },
    /**
     * 删除病害
     */
    deletaDisease () {
    //   this.$confirm(`此操作将永久删除${this.currentVirus.d_name}, 是否继续?`, '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     let token = localStorage.token;
    //     let d_id = this.currentVirus.disease_id;
    //     DataService.deteleDisease({token, d_id})
    //       .then(res => {
    //         if (res.errorCode === 0) {
    //           this.virusList.splice(this.virusList.findIndex(res => res.id === d_id), 1);
    //           this.show = false;
    //           if (this.virusList.length > 0) {
    //             this.currentVirus = this.virusList[0];
    //             this.currentVirusName = this.currentVirus.d_name;
    //           }
    //           this.$message({type: 'success', message: '删除成功!'});
    //         } else {
    //           this.$message.error(res.message);
    //         }
    //       });
    //   }).catch(() => {
    //     this.$message({type: 'info', message: '已取消删除'});
    //   });
    },
    /**
     * 取消修改信息
     */
    cancel () {
      this.show = false;
    },
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
    //   let pics_id = file.pics_id;
    //   let token = localStorage.token;
    //   DataService.deleteImg({token, pics_id}).then(res=> {
    //     this.$message({message: res.message, type: 'success'});
    //   })
    },
    /**
     * 限制用户上传的图片格式和大小。
     */
    beforeAvatarUpload (file) {
      const isJPG = /^image/.test(file.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('只能上传图片!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    /**
     * 文件改变时所调用的钩子 => 检查上传图片大小和类型
     */
    change (file, fileList) {
      const isJPG = /^image/.test(file.raw.type);
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('只能上传图片!');
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
    //   if (!this.currentVirus.d_name) {
    //     this.$message({message: '病害名称未填', type: 'warning'});
    //     return false;
    //   }
    //   if (!this.currentVirus.introduction) {
    //     this.$message({message: '简介未填', type: 'warning'});
    //     return false;
    //   }
    //   if (!this.currentVirus.ill) {
    //     this.$message({message: '患病症状未填', type: 'warning'});
    //     return false;
    //   }
    //   if (!this.currentVirus.occur) {
    //     this.$message({message: '发生因素未填', type: 'warning'});
    //     return false;
    //   }
    //   if (!this.currentVirus.scheme) {
    //     this.$message({message: '防治方案未填', type: 'warning'});
    //     return false;
    //   }
    //   this.currentVirus.token = localStorage.token;
    //   this.currentVirus.c_id = this.currentCrops.c_id;
    //   this.currentVirus.cropimg = this.currentCrops.cropimg;
    //   this.$refs.upload.submit();
    },
    /**
     * 上传成功时所调用的钩子
     */
    success (response, file, fileList) {
    //   if (response.errorCode === 0) {
    //     if (this.diseaseType === 'add') {
    //       this.currentVirus = this.virusList[0];
    //       this.currentVirusName = this.currentVirus.d_name;
    //       this.$message({type: 'success', message: '添加成功!'});
    //       this.show = false;
    //     } else if (this.diseaseType === 'updata') {
    //       this.currentVirus.disease_id = response.data.disease_id;
    //       this.$message({type: 'success', message: '更新成功!'});
    //     }
    //   } else {
    //     if (this.diseaseType === 'add') {
    //       this.$message({type: 'error', message: '添加失败!'});
    //     } else if (this.diseaseType === 'updata'){
    //       this.$message({type: 'error', message: '更新失败!'});
    //     }
    //   }
    }
  },
  mounted: function () {
    // this.upUrl = `${baseUrl}disease/addDisease`;
    // let token = localStorage.getItem('token');
    // let code = 0;
    // DataService.getCrop({code, token})
    //   .then(res => {
    //     if (res.errorCode === 0) {
    //       this.dataAll = res.data;
    //       let hash = {};
    //       this.crops = this.dataAll.reduce((item, res) => {
    //         hash[res.c_name] ? '': hash[res.c_name] = true && item.push(res);
    //         return item;
    //       }, []);
    //       this.currentCrops = this.crops[0];
    //       this.virusList = this.dataAll.filter(data => this.currentCrops.c_name === data.c_name);
    //       this.currentVirus = this.virusList[0];
    //       let disease_id = this.currentVirus.disease_id;
    //       this.getVirusImg(disease_id);
    //     }
    //   });
  }
};
