package com.psytest.myproject.controller;

import com.psytest.myproject.bean.Dass21;
import com.psytest.myproject.bean.Dass21Example;
import com.psytest.myproject.req.Dass21Req;
import com.psytest.myproject.service.Dass21Service;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/dass21")
public class Dass21Controller {
    @Resource
    private Dass21Service dass21Service;

    /**
     * 获取所有用户dass21答题历史
     * @param request
     * @return
     */
    @RequestMapping("/history_list")
    @ResponseBody
    List<Dass21> selectByExample(HttpServletRequest request){
        return dass21Service.selectByExample(new Dass21Example());
    }

    /**
     * 获取某个用户的dass21提交历史
     * @param request
     * @return
     */
    @RequestMapping("/history_list/user")
    @ResponseBody
    List<Dass21> selectHistoryByUserId(HttpServletRequest request){
        Dass21Example dass21Example = new Dass21Example();
        Dass21Example.Criteria dass21criteria = dass21Example.createCriteria();
        dass21criteria.andUseridEqualTo(Integer.parseInt(request.getParameter("userid")));

        return dass21Service.selectByExample(dass21Example);
    }

    /**
     * 根据记录的主键删除某条dass21记录
     * @param request
     * @return
     */
    @RequestMapping("/history_list/delete")
    @ResponseBody
    public int deleteByPrimaryKey(HttpServletRequest request){
        int recordId = Integer.parseInt(request.getParameter("id"));
        return dass21Service.deleteByPrimaryKey(recordId);
    }

    /**
     * 提交当前问卷记录
     *
     * 各项分数 = 三个因子总分*2
//     * @param request
     * @return
     */
    @PostMapping("/commit")
    public int insertSelective(@RequestBody Dass21Req dass21Req) {
        Dass21 dass21 = new Dass21();

        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());

        try {
            dass21.setUserid(dass21Req.getUserid());
            dass21.setTime(timestamp);
            dass21.setAnswer1(dass21Req.getAnswer1());
            dass21.setAnswer2(dass21Req.getAnswer2());
            dass21.setAnswer3(dass21Req.getAnswer3());
            dass21.setAnswer4(dass21Req.getAnswer4());
            dass21.setAnswer5(dass21Req.getAnswer5());
            dass21.setAnswer6(dass21Req.getAnswer6());
            dass21.setAnswer7(dass21Req.getAnswer7());
            dass21.setAnswer8(dass21Req.getAnswer8());
            dass21.setAnswer9(dass21Req.getAnswer9());
            dass21.setAnswer10(dass21Req.getAnswer10());
            dass21.setAnswer11(dass21Req.getAnswer11());
            dass21.setAnswer12(dass21Req.getAnswer12());
            dass21.setAnswer13(dass21Req.getAnswer13());
            dass21.setAnswer14(dass21Req.getAnswer14());
            dass21.setAnswer15(dass21Req.getAnswer15());
            dass21.setAnswer16(dass21Req.getAnswer16());
            dass21.setAnswer17(dass21Req.getAnswer17());
            dass21.setAnswer18(dass21Req.getAnswer18());
            dass21.setAnswer19(dass21Req.getAnswer19());
            dass21.setAnswer20(dass21Req.getAnswer20());
            dass21.setAnswer21(dass21Req.getAnswer21());
            // 其他答案的设置类似

            dass21.setStress((dass21.getAnswer1() + dass21.getAnswer6() + dass21.getAnswer8() + dass21.getAnswer11() + dass21.getAnswer12() + dass21.getAnswer14() + dass21.getAnswer18()) * 2);
            dass21.setAnxiety((dass21.getAnswer2() + dass21.getAnswer4() + dass21.getAnswer7() + dass21.getAnswer9() + dass21.getAnswer15() + dass21.getAnswer19() + dass21.getAnswer20()) * 2);
            dass21.setDepression((dass21.getAnswer3() + dass21.getAnswer5() + dass21.getAnswer10() + dass21.getAnswer13() + dass21.getAnswer16() + dass21.getAnswer17() + dass21.getAnswer21()) * 2);

            return dass21Service.insertSelective(dass21);
        } catch (Exception e) {
            // 处理NumberFormatException异常
            e.printStackTrace();
            // 返回适当的错误信息或采取其他适当的操作
            return -1;
        }
    }



    @RequestMapping("/history_list_detail")
    @ResponseBody
    List<Dass21> getRecordWithUserinfo(HttpServletRequest request){
        return dass21Service.getRecordWithUserinfo();
    }
}
