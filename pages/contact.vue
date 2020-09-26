<template>
  <transition appear-active-class="animated fadeInUp" appear>
    <div style="background-color:#f6f9fc;">
      <div class="page">
        <h1 style="text-align:center;margin-bottom:20px">Contact Us</h1>
        <div class="row">
          <div class="column">
            <div>
              <p>
                If you have any questions, suggestions, requests, or data contribitions you would like to make to the Digital Atlas of Micronesia, please contact us.
              </p>
            </div>
            <a-divider></a-divider>
            <div>
              <p>
                © Island Research & Education Initiative (iREi)
                <br>
                PO Box PS 303
                <br>
                Palikir, Pohnpei, FM 96941
                <br>
                Federated States of Micronesia
              </p>
              <ul>
                <li>
                  <a href="https://www.facebook.com/irei.micronesia" target="_black">
                    <a-icon type="facebook" theme="filled" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/IREIvideos" target="_black">
                    <a-icon type="youtube" theme="filled" />
                  </a>
                </li>
                <li>
                  <a href="https://islandresearch.org/" target="_black">
                    <a-icon type="ie-circle" theme="filled" />
                  </a>
                </li>
              </ul>
            </div>
            <a-divider></a-divider>
            <div>
              <p>
                © Water and Environmental Research Institute of <br> the Western Pacific (WERI)
                <br>
                University of Guam
                <br>
                UOG Station
                <br>
                Mangilao, GU 96923
              </p>
              <ul>
                <li>
                  <a href="http://weriguam.org/" target="_black">
                    <a-icon type="ie-circle" theme="filled" />
                  </a>
                </li>
                <li>
                  <a-tooltip placement="right">
                    <template slot="title">
                      <span>+1 671 735 2685</span>
                    </template>
                    <a>
                      <a-icon type="phone" theme="filled" />
                    </a>
                  </a-tooltip>
                </li>
              </ul>
            </div>
            <a-divider></a-divider>
            <div>
              <p>
                © FSM Department of Environment, Climate Change <br> and Emergency Management (DECEM)
                <br>
                P. O. Box PS-69
                <br>
                Palikir, Pohnpei FSM 96941
                <br>
                Fedrate State of Micronesia
                <br>
              </p>
              <ul>
                <li>
                  <a href="https://decem.gov.fm" target="_black">
                    <a-icon type="ie-circle" theme="filled" />
                  </a>
                </li>
                <li>
                  <a href="mailto:fsmdecem@fsmdecem.fm">
                    <a-icon type="mail" theme="filled" />
                  </a>
                </li>
                <li>
                  <a-tooltip placement="right">
                    <template slot="title">
                      <span>(691) 320-8814/8815</span>
                    </template>
                    <a>
                      <a-icon type="phone" theme="filled" />
                    </a>
                  </a-tooltip>
                </li>
              </ul>
            </div>
          </div>
          <div class="column">
            <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 14 }" @submit="handleSubmit">
              <a-form-item label="Name">
                <a-input v-decorator="['Name', { rules: [{ required: true, message: 'Please input your name!' }] }]" />
              </a-form-item>
              <a-form-item label="Email">
                <a-input v-decorator="['Email', { rules: [{ required: true, message: 'Please input your email!' }] }]" />
              </a-form-item>
              <a-form-item label="Message">
                <a-textarea :rows="8" v-decorator="['Message', { rules: [{ required: true, message: 'Please input your message!' }] }]" />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" html-type="submit">
                  Submit
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'vertical',
      form: this.$form.createForm(this),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values);
          fetch(`https://islandatlas.org/assets/form.php`, {
            method: "post",
            body: new URLSearchParams(values)
          }).then(res => {
            console.log(res);
            this.form.resetFields()
          })
        }
      });
    }
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  font-size: 20px;
  padding: 0;
}
li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
.page {
  min-height: 100vh;
  margin-top: 50px;
  background-color: white;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.formConainer {
  background: #f9f9f9;
  height: 700px;
  padding: 20px;
}

@media screen and (max-width: 991px) {
  .page {
    padding-right: 20px;
    padding-left: 20px;
    max-width: 100%;
  }
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 768px) {
  .column {
    width: 100%;
  }
  .row {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
