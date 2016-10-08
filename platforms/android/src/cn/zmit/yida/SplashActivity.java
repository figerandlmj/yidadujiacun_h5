package cn.zmit.yida;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

/**
 * Created by Administrator on 2015/12/30.
 */
public class SplashActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        initView();
    }

    private void initView() {
        SharedPreferences sp = getSharedPreferences("file", Context.MODE_PRIVATE);
        SharedPreferences.Editor edit = sp.edit();
        if (0 == sp.getInt("isFirst", 0)) {
            Intent intent = new Intent(this, GuideActivity.class);
            startActivity(intent);
            edit.putInt("isFirst", 1).commit();
        } else {
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
        }
        finish();
    }
}
