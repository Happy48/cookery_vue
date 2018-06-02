<template>
  <div>
    <div class="col-md-9" style="padding-right:50px">
      <div class="events-top">
        <div class="search-in animated wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="500ms">
          <h4 class="col-md-8" style="padding-top:15px "> {{name}} </h4>
        </div>
        <div class="clearfix"> </div>
      </div>
      <div class="blog-header">
        <div :key="item.index" v-for="item in list" class=" blog-head">
          <div :key="subItem.index" v-for="subItem in item" class="col-md-4 blog-top">
            <div class="blog-in">
              <a href="single.html"><img class="img-responsive" :src="subItem.url" alt=" "></a>
              <div class="blog-grid">
                <h3><a href="single.html">{{subItem.title}}</a></h3>
                <div class="date">
                  <span class="date-in"><i class="glyphicon glyphicon-calendar"> </i>{{subItem.date}}</span>
                  <a href="single.html" class="comments"><i class="glyphicon glyphicon-comment"></i>{{subItem.comments}}</a>
                  <div class="clearfix"> </div>
                </div>
                <p>{{subItem.description}}</p>
                <div class="more">
                  <a class="link link-yaku" href="single.html">
                    <span>R</span><span>e</span><span>a</span><span>d</span> <span>M</span><span>o</span><span>r</span><span>e</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </div>
    <div class="clearfix"> </div>
  </div>
</template>
<script>
export default {
  props: [
    'name'
  ],
  data () {
    return {
      list: [
        [
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          },
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          },
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          }
        ],
        [
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          },
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          },
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          }
        ],
        [
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          },
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          },
          {
            title: 'On the other hand',
            date: '22.08.2014',
            url: '/static/images/bl2.jpg',
            desc: 'At vero eos et accusamus et iusto',
            comments: '24'
          }
        ]
      ]
    }
  }
}
</script>
<style>

</style>
