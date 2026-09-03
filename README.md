# 南水北调信息可视化平台

华东师范大学 · 地理科学学院学生作品 —— 南水北调工程信息可视化平台，项目时间为2022-2023年。

本项目基于 **Cesium（数字地球）** 与 **ECharts** 构建，是一个纯静态前端项目，可直接部署到 **GitHub Pages** 在线浏览。

## 在线访问

GitHub Pages 部署完成后，访问路径格式为：

```
https://FRANK-syz.github.io/Water_Diversion/
```

## 页面说明

| 入口 | 文件 | 说明 |
| ---- | ---- | ---- |
| 首页 | `index.html` | 平台入口导航 |
| 工程可视化（数字地球） | `TransWater.html` | 基于 Cesium 的三维地球，展示南水北调西/中/东三条引水线路、工程点位与三维漫游 |
| 中国水资源现状 | `present.html` | ECharts 图表 + 逐年（2012-2021）对比页 |
| 相关政策解读 | `policy.html` | 政策内容 |

## 依赖服务说明（需网络）

网页正常显示数字地球依赖以下网络服务：

- **Cesium Ion**：默认影像底图 + 全球地形
- **天地图 WMTS**：中文注记图层（天地图WMTS配置的API token已失效，不可用）
- **阿里云 DataV GeoJSON**：中国行政边界

> 提示：未使用天地图作为底图时，由于中国地区的地理坐标偏移，线矢量数据无法与真实的底图精确对齐，存在一定的方位偏差。

## 本地运行

无需安装依赖，任意静态文件服务器即可：

```bash
# 方式一：使用 Python 自带的静态服务器
python -m http.server 8080
# 浏览器打开 http://localhost:8080/

# 方式二：使用任意静态托管（Node http-server、VSCode Live Server 等）均可
```

## 部署到 GitHub Pages

1. 将本仓库推送到你的 GitHub 账户仓库；
2. 展示网址 `https://<GitHub用户名>.github.io/<仓库名>/`；

## 项目结构

```
Water_Diversion/
├── index.html              # 入口页
├── TransWater.html         # Cesium 数字地球页
├── present.html            # 水资源现状页（图表）
├── policy.html             # 政策解读页
├── css/  data/  font/  images2/  js2/   # 页面资源
├── years/                  # 逐年对比子页面
└── Cesium/                 # CesiumJS 引擎（已内置，支持离线/静态托管）
```

## 说明

- 本项目为学生团队作品，相应数据均从公开网站上获取，仅作为存档与学习交流使用
- 项目和README.md全程由AI上传并完成制作，如有错漏敬请谅解
