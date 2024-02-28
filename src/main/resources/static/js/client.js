new Vue({
    el: '#app',
    data() {
        return {
            tjclient:[],
            show: false,
            fileList: [],//文件列表
            followid:'',
            tableData:[],
            dialogVisible: false,
            gjdialogVisible: false,
            currentPage: 1, //初始页
            pagesize: 100,    //    每页的数据
            forms:{
                phone:'',
                name:'',
                address:'',
                xydj:'',
                ssxs:''
            },
            formd:{
                bz:'',
                balance:''
            },
            formc:{
                balance:'',
                email:'',
                sex:'',
                ssxs:'',
                phone:'',
                name:'',
                address:'',
                xydj:'',
                ed:'',
                id:'',
                bz:'',
                zq: false
            },
            form:{
                email:'',
                sex:'',
                phone:'',
                gjdate:'',
                ed:'',
                name:'',
                address:'',
                xydj:'',
                id:'',
                bz:'',
                zq:''
            }

        }
    },


    //初始化
    mounted: function () {
        setTimeout(this.delayedExecution, 1000);

        var newthis = this;
        /* 初始查询 */
        var url = '/listdata';
        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            success: function (result) {
                newthis.tableData=result;
            },
            error: function () {
                console.log('error submit!!');
                return false;
            }
        });

        //统计数据
        var urldata = '/tjdata';
        $.ajax({
            type: 'POST',
            url: urldata,
            dataType: 'json',
            success: function (result) {
                document.getElementById("c").innerText = result.A;
                document.getElementById("b").innerText = result.B+' $';
               document.getElementById("a").innerText = result.C;
               document.getElementById("d").innerText = result.D;

            },
            error: function () {
                console.log('error submit!!');
                return false;
            }
        });

        //客户分布比例
        newthis.khfb();
        newthis.wzshm();


    },
    //方法事件
    methods: {
        wzshm(){
            var chartDom = document.getElementById('f');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            left: '',
                            top: 'center',
                            style: {
                                text: 'Client distribution ',
                                fontSize: 80,
                                fontWeight: 'bold',
                                lineDash: [0, 200],
                                lineDashOffset: 0,
                                fill: 'transparent',
                                stroke: '#efc3c3',
                                lineWidth: 1
                            },
                            keyframeAnimation: {
                                duration: 3000,
                                loop: true,
                                keyframes: [
                                    {
                                        percent: 0.7,
                                        style: {
                                            fill: 'transparent',
                                            lineDashOffset: 200,
                                            lineDash: [200, 0]
                                        }
                                    },
                                    {
                                        // Stop for a while.
                                        percent: 0.8,
                                        style: {
                                            fill: 'transparent'
                                        }
                                    },
                                    {
                                        percent: 1,
                                        style: {
                                            fill: 'black'
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            };
             myChart.setOption(option);

        },

        //客户分布
        khfb(){

            //统计数据
            var urldata = '/tjclient';
            $.ajax({
                type: 'POST',
                url: urldata,
                dataType: 'json',
                success: function (result) {
                    var chartDom = document.getElementById('e');
                    var myChart = echarts.init(chartDom);
                    var option;
                    option = {
                        title: {
                            text: 'Customer distribution',
                            subtext: 'Data',
                            left: 'center'
                        },
                        tooltip: {
                            trigger: 'item'
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left'
                        },
                        series: [
                            {
                                name: 'Access From',
                                type: 'pie',
                                radius: '50%',
                                data:  result ,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };
                    myChart.setOption(option);

                },
                error: function () {
                    console.log('error submit!!');
                    return false;
                }
            });





        },



        delayedExecution(){
            this.show = true;
        },
        //条件搜索
        Search(){
            //获取form表单个项目值
            var sForm = this.forms;

            var newthis = this;
            var d={
                'phone':sForm.phone,
                'name': sForm.name,
                'xydj': sForm.xydj,
                'ssxs': sForm.ssxs,
            }
            var url = '/search';
            $.ajax({
                type: 'POST',
                url: url,
                data: d,
                dataType: 'json',
                success: function (result) {
                    newthis.tableData = result;
                },
                error: function () {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        /* 编辑 */
        handleEdit(){

        },
        /* 时间格式化 */
        formatDate (d){
            let dt = new Date(d)
            return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
        },
        //跟进方法
        follow(){
            //获取form表单个项目值
            var addForm = this.formd;

            var newthis = this;
            var d={
                'id':newthis.followid,
                'bz': addForm.bz,
                'balance': addForm.balance,
            }
            var url = '/follow';
            $.ajax({
                type: 'POST',
                url: url,
                data: d,
                dataType: 'json',
                success: function (result) {
                    if (result == 1) {
                        newthis.listData();
                        newthis.$notify({
                            title: 'success',
                            type: 'success',
                            offset: 300
                        });
                        //统计数据
                        var urldata = '/tjdata';
                        $.ajax({
                            type: 'POST',
                            url: urldata,
                            dataType: 'json',
                            success: function (result) {
                                document.getElementById("b").innerText = result.B+'$';
                                document.getElementById("d").innerText = result.D;

                            },
                            error: function () {
                                console.log('error submit!!');
                                return false;
                            }
                        });
                        newthis.gjdialogVisible = false;
                    } else {
                        newthis.$message.error('Im sorry submit error !');
                    }
                },
                error: function () {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //跟进说明
        gj(id){
            //回显数据
            this.gjdialogVisible = true;
            let newthis = this;
            var url = '/selectByid';
            $.ajax({
                type: 'POST',
                url: url,
                data: {'id':id},
                dataType: 'json',
                success: function (result) {
                    newthis.formd.balance = result[0].balance;
                    newthis.formd.bz = result[0].bz;
                },
                error: function () {
                    console.log('error submit!!');
                    return false;
                }
            });
            this.followid = id;



        },
        // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
            this.pagesize = size;
            console.log(this.pagesize)  //每页下拉显示数据
        },
        handleCurrentChange: function (currentPage) {
            this.currentPage = currentPage;
            console.log(this.currentPage)  //点击第几页
        },
        addclient(){
            this.formc = [];
            this.dialogVisible = true;
        },
        onSubmit(){
            //获取form表单个项目值
            var addForm = this.formc;

            var newthis = this;
            var d={
                'email': addForm.email,
                'sex': addForm.sex,
                'ed': addForm.ed,
                'balance': addForm.balance,
                'phone': addForm.phone,
                'name': addForm.name,
                'address': addForm.address,
                'xydj': addForm.xydj,
                'bz': addForm.bz,
                'zq': addForm.zq,
                'ssxs': addForm.ssxs,
            }
            var url = '/addhtdata';
            $.ajax({
                type: 'POST',
                url: url,
                data: d,
                dataType: 'json',
                success: function (result) {
                    if (result == 1) {
                        newthis.listData();
                        newthis.$notify({
                            title: 'success',
                            type: 'success',
                            offset: 300
                        });
                    } else {
                        newthis.$message.error('Im sorry submit error !');
                    }
                },
                error: function () {
                    console.log('error submit!!');
                    return false;
                }
            });

        },
        //数据列表
        listData() {
            var newthis = this;
            $.ajax({
                type: 'POST',
                url: '/listdata',
                dataType: 'json',
                success: function (result) {
                    newthis.tableData = result;
                },
                error: function () {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //删除
        rowDelete(val){
            var newthis = this;
            $.ajax({
                type: 'POST',
                url: '/delete',
                data:{id:val},
                dataType: 'json',
                success: function (result) {
                    if(result==1){
                        newthis.listData();
                        newthis.$notify({
                            title: 'delete success!',
                            type: 'success',
                            offset: 300
                        });
                    } else{
                        newthis.$message.error('Im sorry delete error !');
                    }
                },
                error: function () {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //导入 excel
        importExcel(){
            let newthis = this;
            //判断files数组的长度是否大于0，不大于0 则未选择附件
            if (this.$refs.upload.uploadFiles.length == 0) {
                newthis.$message({
                    message: '请选择需要上传的文件',
                    type: 'error'
                });
                newthis.up = true;
                return false;
            }
            var name = this.$refs.upload.uploadFiles[0].name;
            var index = name.lastIndexOf(".")
            var res = name.substring(index, name.length);
            if (res!=".xlsx" && res!=".xls" ) {
                newthis.$message({
                    message: '该文件非Excel文件,或后缀非xlsx',
                    type: 'error'
                });
                return false;
            }
            this.$refs.upload.submit();
            this.listData();

        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
    }
})