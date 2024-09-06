@echo off
md Makerzoid\Superbot
md Makerzoid\Superbot\Superbot
md Makerzoid\Superbot\Premium

md Makerzoid\Superbot\Superbot\power
md Makerzoid\Superbot\Superbot\elastic
md Makerzoid\Superbot\Superbot\basic

copy D:\.gitkeep Makerzoid\Superbot\Superbot\power
copy D:\.gitkeep Makerzoid\Superbot\Superbot\elastic
copy D:\.gitkeep Makerzoid\Superbot\Superbot\basic

md Makerzoid\Superbot\Premium\intelligent
md Makerzoid\Superbot\Premium\transportation
md Makerzoid\Superbot\Premium\mechanical
md Makerzoid\Superbot\Premium\animal
md Makerzoid\Superbot\Premium\basic
md Makerzoid\Superbot\Premium\gear
md Makerzoid\Superbot\Premium\elastic

copy D:\.gitkeep Makerzoid\Superbot\Premium\intelligent
copy D:\.gitkeep Makerzoid\Superbot\Premium\transportation
copy D:\.gitkeep Makerzoid\Superbot\Premium\mechanical
copy D:\.gitkeep Makerzoid\Superbot\Premium\animal
copy D:\.gitkeep Makerzoid\Superbot\Premium\basic
copy D:\.gitkeep Makerzoid\Superbot\Premium\gear
copy D:\.gitkeep Makerzoid\Superbot\Premium\elastic

echo Copy completed
