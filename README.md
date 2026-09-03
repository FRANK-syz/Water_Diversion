# 南水北调信息可视化平台

华东师范大学 · 地理科学学院学生作品 —— 南水北调工程信息可视化平台。

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

网页正常显示数字地球依赖以下网络服务，均已在代码内配置密钥：

- **Cesium Ion**：默认影像底图 + 全球地形（`Cesium.js` 中内置 access token）
- **天地图 WMTS**：中文注记图层（`TransWater.html` 中 `https://t1.tianditu.com`）
- **阿里云 DataV GeoJSON**：中国行政边界（`https://geo.datav.aliyun.com`）

> 提示：以上服务商用均有配额/授权限制，若部署后瓦片加载慢或空白，多为对应服务密钥配额问题，属正常现象。

## 本地运行

无需安装依赖，任意静态文件服务器即可：

```bash
# 方式一：使用 Python 自带的静态服务器
python -m http.server 8080
# 浏览器打开 http://localhost:8080/

# 方式二：使用任意静态托管（Node http-server、VSCode Live Server 等）均可
```

## 部署到 GitHub Pages

1. 将本仓库推送（push）到你的 GitHub 账户仓库；
2. 仓库 `Settings` → `Pages` → 在 **Build and deployment → Source** 选择 `Deploy from a branch`；
3. **Branch** 选择 `main`，目录选择 `/ (root)`，点击 **Save**；
4. 等待 1~2 分钟，页面会给出网址 `https://FRANK-syz.github.io/Water_Diversion/`；
5. 打开该网址的 `index.html` →「工程可视化」即可看到 Cesium 数字地球。

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

- 本项目为静态部署仓库，已剔除原始 GIS 工程数据（`data_water_trans` 目录下的 Shapefile / Geodatabase / 栅格等源数据，网页运行时并不需要它们）。
- CesiumJS 引擎 `Cesium/` 目录自本地构建产物复制，已随仓库一并发布。
