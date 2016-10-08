package cn.zmit.yida;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.view.ViewPager;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;


import java.util.ArrayList;
import java.util.List;

/**
 * Created by Joash_Yan on 2015/12/30.
 */
public class GuideActivity extends Activity {
    private int[] ids = {R.drawable.guide_01,
            R.drawable.guide_02, R.drawable.guide_03,

    };
    public List<View> guides = new ArrayList<View>();
    private ViewPager mVpGuide;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_guide);
        mVpGuide = (ViewPager) findViewById(R.id.vp_guide);
        initData();
    }

    private void initData() {
        /**添加数据*/
        for (int i = 0; i < ids.length; i++) {

            ImageView iv = new ImageView(this);
            iv.setImageResource(ids[i]);
            guides.add(iv);
        }

        GuideAdapter guideAdapter = new GuideAdapter(this, guides);
        mVpGuide.setAdapter(guideAdapter);
    }

    @Override
    protected void onStop() {
        super.onStop();
        finish();
    }
}
