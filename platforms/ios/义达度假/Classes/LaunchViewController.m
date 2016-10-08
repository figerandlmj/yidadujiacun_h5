//
//  LaunchViewController.m
//  kuaixiu-vendor
//
//  Created by Surfin Zhou on 15/9/22.
//  Copyright © 2015年 ZMIT. All rights reserved.
//

#import "LaunchViewController.h"
#import "MainViewController.h"

#define SCREEN_WIDTH    [UIScreen mainScreen].bounds.size.width
#define SCREEN_HEIGHT   [UIScreen mainScreen].bounds.size.height

#define TABBAR_HEIGHT   self.tabBarController.tabBar.frame.size.height
#define STATUS_HEIGHT   [[UIApplication sharedApplication] statusBarFrame].size.height
#define NAVIGATIONBAR_HEIGHT 44.0f

#define TOP_HEIGHT STATUS_HEIGHT + NAVIGATIONBAR_HEIGHT

/**
 * @brief 封装颜色
 */
#define RGB(r, g, b) [UIColor colorWithRed:r/255.0 green:g/255.0 blue:b/255.0 alpha:1]
#define RGBA(r, g, b, a) [UIColor colorWithRed:r/255.0 green:g/255.0 blue:b/255.0 alpha:a]

@interface LaunchViewController () <UIScrollViewDelegate>
{
    
}

@property (strong, nonatomic) UIScrollView *scrollView;

@property (strong, nonatomic) NSArray *launchImageArray;

@end

@implementation LaunchViewController

#pragma mark - Lifecycle methods

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    [self scrollEvent];
    
//    self.navigationController.navigationBarHidden = YES;
    
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
}

- (void)scrollEvent
{    
    //从plist文件加载图片数组
    NSString *plistPath = [[NSBundle mainBundle] pathForResource:@"LaunchImage" ofType:@"plist"];
    NSDictionary *tempDict = [[NSDictionary alloc] initWithContentsOfFile:plistPath];
    NSString *height = [NSString stringWithFormat:@"%d",(int)SCREEN_HEIGHT];
    self.launchImageArray = [tempDict objectForKey:height];
    
    //设置scrollView
    _scrollView = [[UIScrollView alloc] initWithFrame:CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)];
    _scrollView.showsHorizontalScrollIndicator  = NO;
    _scrollView.showsVerticalScrollIndicator    = NO;
    
    _scrollView.delegate        = self;
    _scrollView.pagingEnabled   = YES;
    _scrollView.bounces         = NO;
    _scrollView.contentSize     = CGSizeMake(SCREEN_WIDTH * [self.launchImageArray count], SCREEN_HEIGHT - STATUS_HEIGHT);
    [self.view addSubview:_scrollView];
    
    //加载图片到scrollView
    for (int i = 0; i < [self.launchImageArray count]; i++) {
        UIImageView *imageView = [[UIImageView alloc] initWithFrame:CGRectMake(i * SCREEN_WIDTH, 0, SCREEN_WIDTH, SCREEN_HEIGHT)];
        imageView.image = [UIImage imageNamed:self.launchImageArray[i]];
        [self.scrollView addSubview:imageView];
        
        //最后一个增加进入按钮
        if (i == [self.launchImageArray count] - 1) {
            UIButton *btn = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)];
            btn.center = CGPointMake(imageView.center.x, btn.center.y);
//            btn.backgroundColor = RGB(47, 157, 242);
            [self.scrollView addSubview:btn];
            
            [btn setTitle:@"" forState:UIControlStateNormal];
            [btn addTarget:self action:@selector(btnEvent) forControlEvents:UIControlEventTouchUpInside];
            
        }

    }
}

- (void)btnEvent
{
    #if __has_feature(objc_arc)
            MainViewController *destinationVC = [[MainViewController alloc] init];
    #else
            MainViewController *destinationVC = [[[MainViewController alloc] init] autorelease];
    #endif

        [self presentViewController:destinationVC animated:YES completion:nil];
}

@end
