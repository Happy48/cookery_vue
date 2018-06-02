<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-12" style="padding-top:15px ">创建菜谱</h4>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr />
    <div class="row search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-8 col-md-8 animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h3>基本信息</h3>
        <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
          <input type="text" placeholder="添加菜谱名称" />
        </div>
        <br />
        <div class="upload">
          <div class="upload-files">
            <header>
              <p>
                <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                <span class="up">菜谱封面</span>
              </p>
            </header>
            <div class="body" id="drop">
              <i class="fa fa-file-text-o pointer-none" aria-hidden="true"></i>
              <p class="pointer-none"><b>拖放到这里</b><br /><a href="" id="triggerFile">浏览</a>开始上传</p>
              <!--<input type="file" multiple="multiple" />-->
              <input class="fileInput" type="file"  name="" >
            </div>
            <footer>
              <div class="divider">
                <span><AR>图片</AR></span>
              </div>
              <div class="list-files">
                <!--   template   -->
              </div>
              <button class="importar">UPDATE FILES</button>
            </footer>
          </div>
        </div>
        <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
          <textarea value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = '添加菜谱描述';}">添加菜谱描述</textarea>
        </div>
        <div class="single">
          <div class="single-top">
            <div class="lone-line">
              <h4>用料</h4>
              <br>
              <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="alignment: center;font-size:20px;width:70%;">
                <tbody id="componentBody">
                <tr id="co1">
                  <td>
                    <input type="text" placeholder="食材：如鸡蛋" style="width:100%;outline:none">
                  </td>
                  <td>
                    <input type="text" placeholder="用量：如一只" style="width:100%;outline:none">
                  </td>
                  <td>
                    <img src="/static/images/close.png" draggable="false" onclick="deleteCo(1)">
                  </td>
                </tr>
                <tr id="co2">
                  <td>
                    <input type="text" placeholder="食材：如鸡蛋" style="width:100%;outline:none">
                  </td>
                  <td>
                    <input type="text" placeholder="用量：如一只" style="width:100%;outline:none">
                  </td>
                  <td>
                    <img src="/static/images/close.png" draggable="false" onclick="deleteCo(2)">
                  </td>
                </tr>
                <tr id="co3">
                  <td>
                    <input type="text" placeholder="食材：如鸡蛋" style="width:100%;outline:none">
                  </td>
                  <td>
                    <input type="text" placeholder="用量：如一只" style="width:100%;outline:none">
                  </td>
                  <td>
                    <img src="/static/images/close.png" draggable="false" onclick="deleteCo(3)">
                  </td>
                </tr>
                <tr id="co4">
                  <td>
                    <input type="text" placeholder="食材：如鸡蛋" style="width:100%;outline:none">
                  </td>
                  <td>
                    <input type="text" placeholder="用量：如一只" style="width:100%;outline:none">
                  </td>
                  <td>
                    <img src="/static/images/close.png" draggable="false" onclick="deleteCo(4)">
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="clearfix wow fadeInLeft animated" data-wow-delay=".5s">
                <a class="button gray-button2 small-button" onclick="addComponent()">追加一行用料</a>
              </div>
              <br>
              <h4>做法</h4>
              <br>
              <table class="table wow fadeInLeft animated" data-wow-delay=".5s" style="font-size:20px;">
                <tbody id="stepBody">
                <tr id="step1">
                  <td><h4>1</h4></td>
                  <td >
                    <textarea style="width: 400px;height:200px;outline:none" value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = '';}"></textarea>
                  </td>
                  <td>
                    <div class="imageFileInput">
                      <input class="fileInput" type="file"  name="">
                    </div>
                  </td>
                  <td>
                    <img src="/static/images/closeB.png" style="padding-top: 60px" draggable="false" onclick="deleteStep(1)">
                  </td>
                </tr>
                <tr id="step2">
                  <td><h4>2</h4></td>
                  <td>
                    <textarea style="width: 400px;height:200px;outline:none" value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = '';}"></textarea>
                  </td>
                  <td>
                    <div class="imageFileInput">
                      <input class="fileInput" type="file"  name="">
                    </div>
                  </td>
                  <td>
                    <img src="/static/images/closeB.png" style="padding-top: 60px" draggable="false" onclick="deleteStep(2)">
                  </td>
                </tr>
                <tr id="step3">
                  <td><h4>3</h4></td>
                  <td>
                    <textarea style="width: 400px;height:200px;outline:none" value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = '';}"></textarea>
                  </td>
                  <td>
                    <div class="imageFileInput">
                      <input class="fileInput" type="file"  name="">
                    </div>
                  </td>
                  <td>
                    <img src="/static/images/closeB.png" style="padding-top: 60px" draggable="false" onclick="deleteStep(3)">
                  </td>
                </tr>
                <tr id="step4">
                  <td><h4>4</h4></td>
                  <td>
                    <textarea style="width: 400px;height:200px;outline:none" value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = '';}"></textarea>
                  </td>
                  <td>
                    <div class="imageFileInput">
                      <input class="fileInput" type="file"  name="" >
                    </div>
                  </td>
                  <td>
                    <img src="/static/images/closeB.png" style="padding-top: 60px" draggable="false" onclick="deleteStep(4)">
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="clearfix wow fadeInLeft animated" data-wow-delay=".5s">
                <a class="button gray-button2 small-button" onclick="addStep()">追加一行步骤</a>
              </div>
              <br>
              <br>
            </div>
          </div>
          <div class="leave">
            <h3>小贴士</h3>
            <form>
              <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
                <textarea value=" " onfocus="this.value='';" onblur="if (this.value == '') {this.value = '添加小贴士';}">添加小贴士</textarea>
                <label class="hvr-rectangle-out">
                  <input type="submit" value="上传">
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3"></div>
    </div>

  </div>
</template>
<script>
</script>
<style>
</style>
