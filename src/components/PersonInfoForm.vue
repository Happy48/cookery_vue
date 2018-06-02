<template>
  <div class="col-md-9" style="padding-right: 50px">
    <div class="events-top">
      <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <h4 class="col-md-12" style="padding-top:15px ">我的资料</h4>
      </div>
      <div class="clearfix"> </div>
    </div>
    <hr />
    <div class="row search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-5 col-md-5 animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户名:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" class="form-control" />
        </div>
        <br />
        <div class="form-group form-inline">
          <label style="float: left;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;性别:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <!--<input type="text" disabled="true" id="sex" />-->
          <!--<select  class="form-control" name="sex" id="sex" style="width: auto;">-->
          <!--<option value="男" >男</option>-->
          <!--<option value="女" >女</option>-->
          <!--</select>-->
          <label  class="lh16"><input type="radio" hidefocus="true" value="0"  checked="checked" name="sex"> &nbsp;&nbsp;女</label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label  class="lh16"><input type="radio" hidefocus="true" value="1"  name="sex"> &nbsp;&nbsp;男</label>
        </div>

        <div class="form-group form-inline">
          <label style="float: left;padding-top:25px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <!--<input type="date" placeholder="1980-01-01" disabled="true" id="birthday"/>-->
          <div class="input-group date " id='date1'>
            <input type="text" class="form-control">
            <span class="input-group-addon">
                                    <i class="glyphicon glyphicon-calendar"></i>
                                </span>
          </div>
        </div>
        <br />
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" class="form-control" />
        </div>
        <br />
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" class="form-control" />
        </div>
        <br />
        <br />
        <div class="form-group form-inline">
          <label style="float: left;padding-top:10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地区:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <!--<input type="text"  disabled="true" id="location"/>-->
          <select  class="form-control" name="location" id="location" style="width: auto;">
            <option value="0">选择省份</option>
            <option value="1">北京</option>
            <option value="2">天津</option>
            <option value="3">河北</option>
            <option value="4">山西</option>
            <option value="5">内蒙古</option>
            <option value="6">辽宁</option>
            <option value="7">吉林</option>
            <option value="8">黑龙江</option>
            <option value="9">上海</option>
            <option value="10">江苏</option>
            <option value="11">浙江</option>
            <option value="12">安徽</option>
            <option value="13">福建</option>
            <option value="14">江西</option>
            <option value="15">山东</option>
            <option value="16">河南</option>
            <option value="17">湖北</option>
            <option value="18">湖南</option>
            <option value="19">广东</option>
            <option value="20">海南</option>
            <option value="21">广西</option>
            <option value="22">甘肃</option>
            <option value="23">陕西</option>
            <option value="24">新疆</option>
            <option value="25">青海</option>
            <option value="26">宁夏</option>
            <option value="27">重庆</option>
            <option value="28">四川</option>
            <option value="29">贵州</option>
            <option value="30">云南</option>
            <option value="31">西藏</option>
            <option value="32">台湾</option>
            <option value="33">澳门</option>
            <option value="34">香港</option>
            <option value="100">其他</option>
          </select>
        </div>
        <br />
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="input-group search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
          <label style="float: left;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;头像:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <img class="fl avator-img" id="js-portrait" src="http://img.mukewang.com/58492fe600012e8e01800180-200-200.jpg" data-portrait="58492fe600012e8e01800180" width="180" height="180">
        </div>
      </div>
    </div>

    <div class="row search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
      <div class="col-lg-1 col-md-1"></div>
      <div class="col-lg-7 col-md-7 search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
        <div class="leave form-group form-inline">
          <label>&nbsp;&nbsp;&nbsp;个人简介:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
            <textarea onfocus="this.value='';" onblur="if (this.value == '') {this.value = '介绍一下自己吧';}">介绍一下自己吧</textarea>
          </div>
          <form>
            <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
              <label class="hvr-rectangle-out">
                <input type="submit" value="编辑">
              </label>
            </div>
          </form>
          <form>
            <div class="single-grid wow fadeInLeft animated" data-wow-delay=".5s">
              <label class="hvr-rectangle-out">
                <input type="submit" value="保存" style="display:none">
              </label>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-4 col-md-4"></div>
    </div>
  </div>
</template>
<script>
</script>
<style>
</style>
