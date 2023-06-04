<?php
@header('Content-Type: text/html; charset=UTF-8');
include("./header.php");
?>
                <div class="wells">
                    <h2 style="text-align: center;padding-top: 10px;">KMS激活Windows一键脚本</h2>
                    <hr>
                    <p>1、激活步骤：根据自身系统下载激活脚本，再右键使用管理员运行该脚本即可。</p>
                    <p>2、不知道系统版本的，使用Win+R，输入cmd并运行，然后在命令窗口输入slmgr/dlv查看版本。</p>
                    <p>3、使用KMS激活系统后，有效期为180天。</p>
                    <p>4、系统每7天会连接一次KMS服务器，获取最新的授权，然后激活有效期会重置为180天。</p>
                    <p>5、只要KMS激活服务器不挂，激活状态会一直自动续命，无需人工再次干预。</p>
                    <p>6、如果激活失败可先尝试清除后激活，<a href="kms.php?clean=1">点击下载清除脚本</a>。</p>
                </div>
                <form class="layui-form" action="kms.php" method="post">
                    <div class="layui-tab layui-tab-card">
                        <ul class="layui-tab-title">
                            <li class="layui-this">Windows 10</li>
                            <li>Windows 8.1</li>
                            <li>Windows 8</li>
                            <li>Windows Vista</li>
                            <li>Windows 7</li>
                            <li>Windows Server 2016</li>
                            <li>Windows Server 2012</li>
                            <li>Windows Server 2008</li>
                        </ul>
                        <div class="layui-tab-content">
                            <div class="layui-tab-item layui-show">
                                <div class="radio"><input type="radio" name="kms" value="W269N-WFGWX-YVC9B-4J6C9-T83GX">Windows 10 Professional</div>
                                <div class="radio"><input type="radio" name="kms" value="MH37W-N47XK-V7XM9-C7227-GCQG9">Windows 10 Professional N</div>
                                <div class="radio"><input type="radio" name="kms" value="NPPR9-FWDCX-D2C8J-H872K-2YT43">Windows 10 Enterprise</div>
                                <div class="radio"><input type="radio" name="kms" value="DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4">Windows 10 Enterprise N</div>
                                <div class="radio"><input type="radio" name="kms" value="NW6C2-QMPVW-D7KKK-3GKT6-VCFB2">Windows 10 Education</div>
                                <div class="radio"><input type="radio" name="kms" value="2WH4N-8QGBV-H22JP-CT43Q-MDWWJ">Windows 10 Education N</div>
                                <div class="radio"><input type="radio" name="kms" value="WNMTR-4C88C-JK8YV-HQ7T2-76DF9">Windows 10 Enterprise 2015 LTSB</div>
                                <div class="radio"><input type="radio" name="kms" value="2F77B-TNFGY-69QQF-B8YKP-D69TJ">Windows 10 Enterprise 2015 LTSB N</div>
                                <div class="radio"><input type="radio" name="kms" value="DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ">Windows 10 Enterprise 2016 LTSB</div>
                                <div class="radio"><input type="radio" name="kms" value="QFFDN-GRT3P-VKWWX-X7T3R-8B639">Windows 10 Enterprise 2016 LTSB N</div>
                            </div>
                            <div class="layui-tab-item">
                                <div class="radio"><input type="radio" name="kms" value="GCRJD-8NW9H-F2CDX-CCM8D-9D6T9">Windows 8.1 Professional</div>
                                <div class="radio"><input type="radio" name="kms" value="HMCNV-VVBFX-7HMBH-CTY9B-B4FXY">Windows 8.1 Professional N</div>
                                <div class="radio"><input type="radio" name="kms" value="MHF9N-XY6XB-WVXMC-BTDCT-MKKG7">Windows 8.1 Enterprise</div>
                                <div class="radio"><input type="radio" name="kms" value="TT4HM-HN7YT-62K67-RGRQJ-JFFXW">Windows 8.1 Enterprise N</div>
                            </div>
                            <div class="layui-tab-item">
                                <div class="radio"><input type="radio" name="kms" value="NG4HW-VH26C-733KW-K6F98-J8CK4">Windows 8 Professional</div>
                                <div class="radio"><input type="radio" name="kms" value="XCVCF-2NXM9-723PB-MHCB7-2RYQQ">Windows 8 Professional N</div>
                                <div class="radio"><input type="radio" name="kms" value="32JNW-9KQ84-P47T8-D8GGY-CWCK7">Windows 8 Enterprise</div>
                                <div class="radio"><input type="radio" name="kms" value="JMNMF-RHW7P-DMY6X-RF3DR-X2BQT">Windows 8 Enterprise N</div>
                            </div>
                            <div class="layui-tab-item">
                                <div class="radio"><input type="radio" name="kms" value="YFKBB-PQJJV-G996G-VWGXY-2V3X8">Windows Vista Business</div>
                                <div class="radio"><input type="radio" name="kms" value="HMBQG-8H2RH-C77VX-27R82-VMQBT">Windows Vista Business N</div>
                                <div class="radio"><input type="radio" name="kms" value="VKK3X-68KWM-X2YGT-QR4M6-4BWMV">Windows Vista Enterprise</div>
                                <div class="radio"><input type="radio" name="kms" value="VTC42-BM838-43QHV-84HX6-XJXKV">Windows Vista Enterprise N</div>
                            </div>
                            <div class="layui-tab-item">
                                <div class="radio"><input type="radio" name="kms" value="FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4">Windows 7 Professional</div>
                                <div class="radio"><input type="radio" name="kms" value="MRPKT-YTG23-K7D7T-X2JMM-QY7MG">Windows 7 Professional N</div>
                                <div class="radio"><input type="radio" name="kms" value="W82YF-2Q76Y-63HXB-FGJG9-GF7QX">Windows 7 Professional E</div>
                                <div class="radio"><input type="radio" name="kms" value="33PXH-7Y6KF-2VJC9-XBBR8-HVTHH">Windows 7 Enterprise</div>
                                <div class="radio"><input type="radio" name="kms" value="YDRBP-3D83W-TY26F-D46B2-XCKRJ">Windows 7 Enterprise N</div>
                                <div class="radio"><input type="radio" name="kms" value="C29WB-22CC8-VJ326-GHFJW-H9DH4">Windows 7 Enterprise E</div>
                            </div>
                            <div class="layui-tab-item">
                                <div class="radio"><input type="radio" name="kms" value="CB7KF-BWN84-R7R2Y-793K2-8XDDG">Windows Server 2016 Datacenter</div>
                                <div class="radio"><input type="radio" name="kms" value="WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY">Windows Server 2016 Standard</div>
                                <div class="radio"><input type="radio" name="kms" value="JCKRF-N37P4-C2D82-9YXRT-4M63B">Windows Server 2016 Essentials</div>
                            </div>
                            <div class="layui-tab-item">
                                <div class="radio"><input type="radio" name="kms" value="D2N9P-3P6X9-2R39C-7RTCD-MDVJX">Windows Server 2012 R2 Server Standard</div>
                                <div class="radio"><input type="radio" name="kms" value="W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9">Windows Server 2012 R2 Datacenter</div>
                                <div class="radio"><input type="radio" name="kms" value="KNC87-3J2TX-XB4WP-VCPJV-M4FWM">Windows Server 2012 R2 Essentials</div>
                                <div class="radio"><input type="radio" name="kms" value="BN3D2-R7TKB-3YPBD-8DRP2-27GG4">Windows Server 2012</div>
                                <div class="radio"><input type="radio" name="kms" value="8N2M2-HWPGY-7PGT9-HGDD8-GVGGY">Windows Server 2012 N</div>
                                <div class="radio"><input type="radio" name="kms" value="2WN2H-YGCQR-KFX6K-CD6TF-84YXQ">Windows Server 2012 Single Language</div>
                                <div class="radio"><input type="radio" name="kms" value="4K36P-JN4VD-GDC6V-KDT89-DYFKP">Windows Server 2012 Country Specific</div>
                                <div class="radio"><input type="radio" name="kms" value="XC9B7-NBPP2-83J2H-RHMBY-92BT4">Windows Server 2012 Server Standard</div>
                                <div class="radio"><input type="radio" name="kms" value="HM7DN-YVMH3-46JC3-XYTG7-CYQJJ">Windows Server 2012 MultiPoint Standard</div>
                                <div class="radio"><input type="radio" name="kms" value="XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G">Windows Server 2012 MultiPoint Premium</div>
                                <div class="radio"><input type="radio" name="kms" value="48HP8-DN98B-MYWDG-T2DCC-8W83P">Windows Server 2012 Datacenter</div>
                            </div>
                            <div class="layui-tab-item">
                                <div class="radio"><input type="radio" name="kms" value="6TPJF-RBVHG-WBW2R-86QPH-6RTM4">Windows Server 2008 R2 Web</div>
                                <div class="radio"><input type="radio" name="kms" value="TT8MH-CG224-D3D7Q-498W2-9QCTX">Windows Server 2008 R2 HPC edition</div>
                                <div class="radio"><input type="radio" name="kms" value="YC6KT-GKW9T-YTKYR-T4X34-R7VHC">Windows Server 2008 R2 Standard</div>
                                <div class="radio"><input type="radio" name="kms" value="489J6-VHDMP-X63PK-3K798-CPX3Y">Windows Server 2008 R2 Enterprise</div>
                                <div class="radio"><input type="radio" name="kms" value="74YFP-3QFB3-KQT8W-PMXWJ-7M648">Windows Server 2008 R2 Datacenter</div>
                                <div class="radio"><input type="radio" name="kms" value="GT63C-RJFQ3-4GMB6-BRFB9-CB83V">Windows Server 2008 R2 for Itanium-based Systems</div>
                                <div class="radio"><input type="radio" name="kms" value="WYR28-R7TFJ-3X2YQ-YCY4H-M249D">Windows Web Server 2008</div>
                                <div class="radio"><input type="radio" name="kms" value="TM24T-X9RMF-VWXK6-X8JC9-BFGM2">Windows Server 2008 Standard</div>
                                <div class="radio"><input type="radio" name="kms" value="W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ">Windows Server 2008 Standard without Hyper-V</div>
                                <div class="radio"><input type="radio" name="kms" value="YQGMW-MPWTJ-34KDK-48M3W-X4Q6V">Windows Server 2008 Enterprise</div>
                                <div class="radio"><input type="radio" name="kms" value="39BXF-X8Q23-P2WWT-38T2F-G3FPG">Windows Server 2008 Enterprise without Hyper-V</div>
                                <div class="radio"><input type="radio" name="kms" value="RCTX3-KWVHP-BR6TB-RB6DM-6X7HP">Windows Server 2008 HPC</div>
                                <div class="radio"><input type="radio" name="kms" value="7M67G-PC374-GR742-YH8V4-TCBY3">Windows Server 2008 Datacenter</div>
                                <div class="radio"><input type="radio" name="kms" value="22XQ2-VRXRG-P8D42-K34TD-G3QQC">Windows Server 2008 Datacenter without Hyper-V</div>
                                <div class="radio"><input type="radio" name="kms" value="4DWFP-JF3DJ-B7DTH-78FJB-PDRHK">Windows Server 2008 for Itanium-Based Systems</div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="layui-btn layui-btn-fluid">下载脚本</button>
                </form>
<?php include("./footer.php"); ?>