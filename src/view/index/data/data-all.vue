<template>
  <div class="all-data">
    <div class="left-side">
      <el-input placeholder="请输入内容" v-model="searchCrop">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button style="margin-top: 10px;width: 100%;"
                 @click="addCrop()">
        添加作物
      </el-button>
      <el-dialog title="添加作物" :visible.sync="dialogFormVisible" center>
        <el-form :model="crop">
          <el-form-item label="输入作物名称" :label-width="formLabelWidth">
            <el-input v-model="crop.c_name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="作物中文拼音" :label-width="formLabelWidth">
            <el-input v-model="crop.cropimg" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="输入作物类型" :label-width="formLabelWidth">
            <el-select v-model="crop.type" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-input v-model="crop.type" auto-complete="off"></el-input>-->
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveCrop">保 存</el-button>
        </div>
      </el-dialog>
      <div>
        <ul>
          <li v-for="item in crops" @click="selectCropt(item)"
              :class="currentCrops === item? 'currentCrop': ''">
            <p>{{item.c_name}}</p>
            <div v-if="currentCrops === item">
              <i class="el-icon-edit-outline" @click="updataCrop(item)"></i>
              <i class="el-icon-delete" @click="deleteCrop(item)"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right-side">
      <div class="virus_list">
        <div class="virus_name">
          <h6>病害:</h6>
          <el-button @click="addDisease()">添加病害</el-button>
        </div>
        <div class="virus_content">
          <el-select v-model="currentVirusName"
                     @change="selectVirus"
                     placeholder="请选择">
            <el-option
              v-for="item in virusList"
              :key="item.d_name"
              :label="item.d_name"
              :value="item.d_name">
            </el-option>
          </el-select>
          <!--<ul :style="{height: showDisease === true? '80px': '40px'}">-->
            <!--<li v-for="item in virusList" @click="selectVirus(item)"-->
            <!--:class="item === currentVirus? 'currentCrop': ''">-->
              <!--<p>{{item.d_name}}</p>-->
            <!--</li>-->
          <!--</ul>-->
        </div>
        <!--<div class="more">-->
           <!--<span class="el-dropdown-link" @click="showDisease = !showDisease">-->
             <!--展开<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
           <!--</span>-->
        <!--</div>-->
      </div>
      <div class="virus_details">
        <div class="details_content" v-if="!show">
          <div class="title">
            <h6>病害信息</h6>
            <i class="el-icon-edit" @click="upDisease()"></i>
          </div>
          <div class="details_name"><p>病害名称: {{currentVirus.d_name}}</p></div>
          <div class="img_list" v-if="initShowUrl && currentVirus.fileList && currentVirus.fileList.length > 0">
            <span>主图</span>
            <template>
              <ul class="img_list">
                <li v-for="item in currentVirus.fileList">
                  <img :src="item.url" alt="">
                </li>
              </ul>
            </template>
          </div>
          <ul class="virus_info">
            <li>
              <h5>简介</h5>
              <p>{{currentVirus.introduction}}</p>
            </li>
            <li>
              <h5>患病症状</h5>
              <p>{{currentVirus.ill}}</p>
            </li>
            <li>
              <h5>发生因素</h5>
              <p>{{currentVirus.occur}}</p>
            </li>
            <li>
              <h5>防治方案</h5>
              <p>{{currentVirus.scheme}}</p>
            </li>
          </ul>
        </div>
        <div class="updata_virus" v-if="show">
          <h6>病害信息 <i class="el-icon-delete" v-if="diseaseType === 'updata'" style="float: right;font-size: 20px;" @click="deletaDisease()"></i></h6>
          <div class="input_name">
            <span>病害名称</span>
            <el-input v-model="currentVirus.d_name" placeholder="请输入内容"></el-input>
          </div>
          <div class="upload_img">
            <span>主图</span>
            <div>
              <el-upload
                :action="upUrl"
                :data="currentVirus"
                ref="upload"
                list-type="picture-card"
                :accept="'image/*'"
                :auto-upload="false"
                :file-list="currentVirus.fileList"
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
            </div>
          </div>
          <div class="updata_info">
            <ul>
              <li>
                <p>简介</p>
                <div>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="currentVirus.introduction">
                  </el-input>
                </div>
              </li>
              <li>
                <p>患病症状</p>
                <div>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="currentVirus.ill">
                  </el-input>
                </div>
              </li>
              <li>
                <p>发生因素</p>
                <div>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="currentVirus.occur">
                  </el-input>
                </div>
              </li>
              <li>
                <p>防治方案</p>
                <div>
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="currentVirus.scheme">
                  </el-input>
                </div>
              </li>
            </ul>
          </div>
          <div class="primtng">
            <el-button type="primary" @click="submitUpload">发布</el-button>
            <el-button @click="cancel">取消</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./data-all.js"></script>

<style scoped lang="scss">
  @import "../../../assets/scss/global";
  @import "./data-all.scss";
</style>
