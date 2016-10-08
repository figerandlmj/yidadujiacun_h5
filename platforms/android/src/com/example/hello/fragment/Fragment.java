package com.example.hello.fragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import cn.zmit.yida.R;
/**
 * Created by Administrator on 2015/12/30.
 */
//        android.app.Fragment
public class Fragment extends android.app.Fragment{
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        return inflater.inflate(R.layout.one,null);

    }
}
