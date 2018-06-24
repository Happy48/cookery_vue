<template>
  <div class="grid-categories animated wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
    <div class="col-md-2 categories-grid" ></div>
    <div class="col-md-10 categories-grid" >
      <h2>全部分类</h2>
    </div>
    <br>
    <br>
    <br>

    <div class="col-md-2 categories-grid" ></div>
    <div class="col-md-9 categories-grid" style="border:3px solid rgb(14, 92, 67)">
      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>热门专题</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>菜式</h4>
            <ul class="popular">
              <li @click="jumpTag('家常菜')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>家常菜</a></li>
              <li @click="jumpTag('快手菜')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>快手菜</a></li>
              <li @click="jumpTag('下饭菜')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>下饭菜</a></li>
              <li @click="jumpTag('素菜')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>素菜</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>人群</h4>
            <ul class="popular">
              <li @click="jumpTag('儿童')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>儿童</a></li>
              <li @click="jumpTag('老人')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>老人</a></li>
              <li @click="jumpTag('孕妇')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>孕妇</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>

          <div class="tagPart">
            <h4 class='subTagName'>功效</h4>
            <ul class="popular">
              <li @click="jumpTag('美容')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>美容</a></li>
              <li @click="jumpTag('清热祛火')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>清热祛火</a></li>
              <li @click="jumpTag('减肥')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>减肥</a></li>
              <li @click="jumpTag('补血')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>补血</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>特殊场合</h4>
            <ul class="popular">
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>早餐</a></li>
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>下午茶</a></li>
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>便当</a></li>
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>圣诞节</a></li>
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>年夜饭</a></li>
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>深夜食堂</a></li>
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>情人节</a></li>
              <li @click="jumpTag('特殊场合')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>宵夜</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>烘焙甜品饮料</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>烘焙</h4>
            <ul class="popular">
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>蛋糕</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>面包</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>饼干</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>披萨</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>派</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>蛋挞</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>司康</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>塔</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>泡芙</a></li>
              <li @click="jumpTag('烘焙')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>奶油霜</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>甜品</h4>
            <ul class="popular">
              <li @click="jumpTag('甜品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>布丁</a></li>
              <li @click="jumpTag('甜品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>冷饮</a></li>
              <li @click="jumpTag('甜品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>果酱</a></li>
              <li @click="jumpTag('甜品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>糖水</a></li>
              <li @click="jumpTag('甜品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>冰激淋</a></li>
              <li @click="jumpTag('甜品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>果冻</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>饮料</h4>
            <ul class="popular">
              <li @click="jumpTag('饮料')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>咖啡</a></li>
              <li @click="jumpTag('饮料')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>豆浆</a></li>
              <li @click="jumpTag('饮料')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>奶茶</a></li>
              <li @click="jumpTag('饮料')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>酒</a></li>
              <li @click="jumpTag('饮料')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>果汁</a></li>
              <li @click="jumpTag('饮料')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>花草茶</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>米面干果腌咸</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>米面饼</h4>
            <ul class="popular">
              <li @click="jumpTag('米面饼')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>面粉</a></li>
              <li @click="jumpTag('米面饼')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>面条</a></li>
              <li @click="jumpTag('米面饼')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>大米</a></li>
              <li @click="jumpTag('米面饼')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>意大利面</a></li>
              <li @click="jumpTag('米面饼')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>糯米</a></li>
              <li @click="jumpTag('米面饼')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>高筋面粉</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>干果类</h4>
            <ul class="popular">
              <li @click="jumpTag('干果类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>芝麻</a></li>
              <li @click="jumpTag('干果类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>花生</a></li>
              <li @click="jumpTag('干果类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>杏仁</a></li>
              <li @click="jumpTag('干果类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>红豆</a></li>
              <li @click="jumpTag('干果类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>白芝麻</a></li>
              <li @click="jumpTag('干果类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>黑芝麻</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>

          <div class="tagPart">
            <h4 class='subTagName'>腌咸制品</h4>
            <ul class="popular">
              <li @click="jumpTag('腌咸制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>火腿</a></li>
              <li @click="jumpTag('腌咸制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>香肠</a></li>
              <li @click="jumpTag('腌咸制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>培根</a></li>
              <li @click="jumpTag('腌咸制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>火腿肠</a></li>
              <li @click="jumpTag('腌咸制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>腊肉</a></li>
              <li @click="jumpTag('腌咸制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>酸菜</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>肉类</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>猪</h4>
            <ul class="popular">
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>猪肉</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>排骨</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>猪肉末</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>五花肉</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>猪蹄</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>肉丝</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>肋排</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>瘦肉</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>鸡</h4>
            <ul class="popular">
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鸡翅</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鸡胸</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鸡腿</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鸡爪</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鸡翅中</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鸡腿肉</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>

          <div class="tagPart">
            <h4 class='subTagName'>牛</h4>
            <ul class="popular">
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>牛肉</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>牛腩</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>肥牛</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>牛排</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>牛里脊</a></li>
              <li @click="jumpTag('肉类')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>牛腱</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>蔬菜水果</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>果实类蔬菜</h4>
            <ul class="popular">
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>彩椒</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>番茄</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>南瓜</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>玉米</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>红椒</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>茄子</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>南瓜</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>玉米粒</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>根茎蔬菜</h4>
            <ul class="popular">
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>土豆</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>萝卜</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>紫薯</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>红薯</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>胡萝卜</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>山药</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>藕</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>芋头</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>叶类蔬菜</h4>
            <ul class="popular">
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>芹菜</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>白菜</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>韭菜</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>菌菇类</h4>
            <ul class="popular">
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>香菇</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>杏鲍菇</a></li>
              <li @click="jumpTag('蔬菜水果')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>银耳</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>汤粥主食</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>主食</h4>
            <ul class="popular">
              <li @click="jumpTag('汤羹')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>汤羹</a></li>
              <li @click="jumpTag('汤羹')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>饭</a></li>
              <li @click="jumpTag('汤羹')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>饼</a></li>
              <li @click="jumpTag('汤羹')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>粥</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>水产</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>鱼</h4>
            <ul class="popular">
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>海水浴</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>淡水鱼</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>三文鱼</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>金枪鱼</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鲫鱼</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>黄鱼</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>带鱼</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鳕鱼</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>虾</h4>
            <ul class="popular">
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>虾仁</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>海米</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>虾米</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>明虾</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>基围虾</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>龙虾</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>小龙虾</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>河虾</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>贝</h4>
            <ul class="popular">
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>蛤蜊</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>干贝</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鲍鱼</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>蟹</h4>
            <ul class="popular">
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>螃蟹</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>梭子蟹</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>大闸蟹</a></li>
              <li @click="jumpTag('水产')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>蟹肉</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>蛋奶豆制品</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>蛋类</h4>
            <ul class="popular">
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鸡蛋</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>咸蛋</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>皮蛋</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>咸蛋黄</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>鹌鹑蛋</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>土鸡蛋</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="tagPart">
            <h4 class='subTagName'>奶制品</h4>
            <ul class="popular">
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>牛奶</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>黄油</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>巧克力</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>奶油</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>奶酪</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>酸奶</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>

          <div class="tagPart">
            <h4 class='subTagName'>豆制品</h4>
            <ul class="popular">
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>豆腐</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>香干</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>豆渣</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>千张</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>腐竹</a></li>
              <li @click="jumpTag('蛋奶豆制品')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>北豆腐</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

      <div class="row tag">
        <div class="col-md-2 categories-grid" >
          <h3 class='tagName'>口味</h3>
        </div>
        <div class="col-md-8 categories-grid" >
          <div class="tagPart">
            <h4 class='subTagName'>异国风味</h4>
            <ul class="popular">
              <li @click="jumpTag('异国风味')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>日式</a></li>
              <li @click="jumpTag('异国风味')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>韩式</a></li>
              <li @click="jumpTag('异国风味')"><a href="#"><i class="glyphicon glyphicon-tags"> </i>西式</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="col-md-2 categories-grid" ></div>
      </div>

    </div>
    <div class="col-md-1 categories-grid" ></div>
    <div class="clearfix"></div>

    <!--<div class="col-md-2 categories-grid" ></div>-->
    <!--<div class="col-md-8 categories-grid" style="border:3px solid rgb(14, 92, 67)">-->
      <!--<ul class="popular">-->
        <!--<li :key="item.index" v-for="(item) in list"  @click="jumpTag(item.name)"><a href="#"><i class="glyphicon glyphicon-tags"> </i>{{item.name}}</a></li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<div class="col-md-2 categories-grid" ></div>-->
  </div>
</template>

<script>
import api from '@/api/getData'
export default {
  // name: 'TagList'
  data () {
    return {
      list: [
        {
          name: '家常菜',
          id: ''
        }
      ],
      num: -1
    }
  },
  created () {
    this.getTagList()
  },
  methods: {
    getTagList () {
      api.getList().then().catch(res => {
        this.list = res.data
      })
    },
    jumpTag (name) {
      this.$router.push({
        name: 'AllBlog',
        params: {
          currentChooseLabel: name,
          tagName: name,
          where: 'All'
        }
      })
    }
  }
}
</script>

<style scoped>
ul li{width:25%;float:left;}
/*ul{*/
  /*height: 400px;*/
/*}*/
ul > li {
  height: 15%;
}
.tagPart{
  margin-top: 1em
}
.tagName{
  font-size:20px;
  color: #2b542c;
  margin-top: 1em
}
.subTagName{
  font-size:1.4em;
  color: #909090;
  margin-top: 1em
}
</style>
