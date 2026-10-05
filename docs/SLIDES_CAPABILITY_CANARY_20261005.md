# MASIBIO Slides Capability Canary — 2026-10-05

## Verdict hiện tại

**Trạng thái: PILOT APPROVED / NOT PRODUCTION STANDARD.**

Masibio đã có một repo public `masi-os-playbook` với `index.html`, `.nojekyll`, `README.md`. Repo hiện là single-file interactive HTML, không phải open-slide/React source project. Đây là tài sản tốt để giữ làm baseline, nhưng chưa phải hệ thống presentation-as-a-web-product chuẩn hóa cho Masibio.

## Nguồn sự thật đã kiểm

- GitHub repo: `minhquoc8110-spec/masi-os-playbook`
- Visibility: public
- Default branch: `main`
- Current structure: `.nojekyll`, `README.md`, `index.html`
- README hiện mô tả: 21 interactive screens, keyboard navigation, mobile responsive reading mode, single-file HTML, design QA, GitHub Pages.
- Ảnh người dùng xác nhận `masibio.github.io` đang 404; vì vậy không lấy `masibio.github.io` làm URL chuẩn hiện tại.

## Target hoàn thành

Hệ thống hoàn chỉnh phải cho phép CEO đưa mục tiêu, MASI OS tạo storyline, dựng deck theo Masibio Brand System, chạy QA, rồi publish thành URL dùng được thực tế.

Kết quả mong muốn:

1. Web deck mở bằng link thật.
2. Mobile Safari và desktop Chromium đều đọc/trình chiếu được.
3. Navigation: keyboard, swipe, menu, fullscreen.
4. Presenter mode có speaker notes.
5. PDF export chạy bằng Chromium.
6. PPTX export mở được bằng Microsoft PowerPoint Mac, không repair warning.
7. Text/shape quan trọng trong PPTX edit được, không chỉ là ảnh.
8. Version trong GitHub rõ ràng.
9. QA E2E ghi bằng chứng trước khi publish.
10. Không dùng dữ liệu khách hàng/PII trong pilot.

## Stack canary

- Engine candidate: `open-slide` v2.x, pin exact version bằng lockfile.
- Repo pilot đề xuất: tạo repo nguồn riêng `masibio-slides` hoặc thư mục nguồn mới trong repo hiện tại, nhưng **không phá baseline single-file đang có**.
- Public route giai đoạn 1: `https://minhquoc8110-spec.github.io/<repo-or-path>/`
- Public route giai đoạn 2: `slides.masi.bio`

## Không làm ngay

- Không dùng `latest`.
- Không fork/customize open-slide trước khi canary PASS.
- Không hứa editable PPTX production cho đến khi kiểm bằng PowerPoint Mac thật.
- Không đưa vào MASI OS runtime automation trước khi có Case Record canary.
- Không thay thế repo/URL đang có nếu chưa có rollback.

## Canary deck đầu tiên

**Deck:** MASI OS — Corporate Brain & Execution Control Plane  
**Ngôn ngữ:** tiếng Việt trước  
**Độ dài:** 12–15 slide  
**Audience:** đối tác đại học / nội bộ quản trị / nhà tài trợ  
**Mục tiêu:** giải thích MASI OS như hệ điều hành vận hành doanh nghiệp, không phải bộ prompt hay tài liệu chết.

## Slide outline v0

1. Title — MASI OS
2. Why now — từ công việc rời rạc sang operating truth
3. Problem — chat, file, task, quyết định bị tách rời
4. Doctrine — R1 Manual, R2 Automation, R3 AI
5. Architecture — CEO → AI Control Tower → BA System → Forge → Runtime → Evidence
6. Operating Truth — PostgreSQL / Notion / GitHub / Evidence
7. Governance — authority, admission, QA, rollback
8. Staff Ready — con người trước, AI sau
9. Lead-to-Cash — case codification đầu tiên
10. Website QA — public content must be tested
11. Grants & Joint Lab — từ chiến lược đến năng lực pilot
12. What changes — từ slide chết thành sản phẩm số có lifecycle
13. Next step — canary, QA, standardization

## QA gate

PASS khi có đủ bằng chứng:

- Visual QA: logo, màu, typography, spacing, contrast, overflow.
- Responsive QA: iPhone Safari, desktop 16:9, desktop narrow width.
- Interaction QA: swipe/keyboard/menu/fullscreen/presenter.
- Build QA: deterministic build, lockfile, no secret, no PII.
- Export QA: PDF usable; PPTX opens clean; notes preserved.
- Deployment QA: route works; refresh deep links; no accidental 404.
- Evidence: screenshots, exported PDF/PPTX, commit SHA, QA notes.

## Execution plan

### Phase 0 — Baseline containment

- Preserve current `index.html` as baseline.
- Do not overwrite production page.
- Work only in canary branch or new repo.

### Phase 1 — Source canary

- Scaffold open-slide pinned v2.x.
- Create MASI Brand tokens and reusable slide primitives.
- Build MASI OS 12–15 slide deck.
- Add README with run/build/export commands.

### Phase 2 — Local/agent QA

- Run build.
- Inspect output on desktop and mobile viewport.
- Export PDF.
- Export PPTX.
- Record known defects.

### Phase 3 — GitHub Pages canary

- Publish canary route.
- Test public link.
- Do not map `slides.masi.bio` until canary PASS.

### Phase 4 — Decision

- PASS: standardize into `Masibio Slides Capability v1.0`.
- PASS_WITH_NOTES: keep pilot, patch defects.
- FAIL: keep current single-file approach and reassess Slidev/Reveal/open-slide.

## Immediate next action

Create a PR from this branch as the control record. Implementation should start from this checklist, not from a TikTok demo or README claim.
