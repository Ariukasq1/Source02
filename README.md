# Сувгуудад бүртгүүлэх

1. Ажлын и-мэйл хаяг нээлгэх
2. Си Ар Эм дээр бүртгэл үүсгэх, сургалт авах - Онбоард хийж байгаа шууд удирдлага нь бүртгэх
3. Гитлаб || Гитхаб дээр нэмүүлэх - Багийн ахлах хөгжүүлэгч эсвэл систем админд мэдэгдэж эрхээ нээлгэнэ.
4. Өөрийн ажиллах project дээр хариуцсан ахлах хөгжүүлэгчээрхээ нэмүүлэх

# Орчин бэлдэх

#### Суулгах:

[Nodejs](https://nodejs.org/en/) /You’ll need Node.js version 10.13 or later./ Recommended хувилбар суулгах

[Yarn](https://yarnpkg.com/getting-started/install)

#### 1. Project clone хийж авах

`git@gitlab.com:nmma/gerege/gerege-wordpress.git` project-ийг clone хийж авна.

#### 2. Веб шинээр хийж байгаа бол шинээр branch үүсгэнэ, Өмнө байсан branch дээр ажиллах бол тухайн branch-руу шилжиж ажиллана.

`git checkout -b [branch-name]`

#### 3. Тухайн project-d хэрэгтэй package-уудыг суулгах:

![(http://gerege.agency/media/gerege/content/Screen_Shot_2022-01-27_at_18.03.07.png)]

`cd src`

`yarn install`

#### 4. project-оо ажлуулах:

`yarn dev`

# Сервер дээр CMS/wp/ үүсгүүлэх

Шинээр сайт хийх гэж байгаа бол System admin - д хэлж server дээр Wordpress үүсгүүлж URL, admin username, password - г авж сайтыг бүрэн ажиллаж байна уу шалгаж үзэх

# Frontend structure

1. **Components** - component-уудаа зохион байгуулна.

2. **Locales** - Хэрвээ олон хэлтэй веб хийж байгаа бол тухайн хэл бүрийн орчуулгын json file-ууд энд байна.

3. **Pages** - Nextjs framework ашиглаж байгаа учраас Pages дотор байгаа бүх js файлыг автоматаар дуудаж ажиллана.

4. **Public** - img, css гэх мэт файлууд байна

# Data fetch хийх

Жишээ болгоод Page-ийн датаг хэрхэн авахыг харуулъя.

**getInitialProps** нь data-г Server side rendering хийж авна.

**Wpapi** - wp REST api - с дата авахад хөнгөвчилж өгсөн package.

Тухайн page, category, post-г slug-р нь барьж авна.

# Хэл

1. WP Multilang Plugin-ийг суулгана, language дээр хэлүүдийг нэмнэ.
2. Config тохируулна
3. Locales folder дотор json file үүсгээд орчуулгуудыг бичиж өгнө

# WP dashboard

**Суулгах plugin-ууд**

- ACF to REST API
- Advanced Custom Fields
- WP-REST-API V2 Menus
- Activity Log - Хэрэглэгчийн зүгээс Log харах хүсэлтэй бол суулгана
- Contact Form 7 - Форм хийх бол суулгана

# React сангууд

- https://ant.design
- https://rsuitejs.com
- https://react-bootstrap.github.io
- …

# Git ашиглах

- `git status` - Ямар ямар файлууд өөрчлөгдсөн байна, одоо төсөл ямар төлөвтэй байгааг харуулна.
- `git add [file-path]` - Шинээр нэмэгдсэн болон, өөрчлөгдсөн файлуудыг stage хийнэ. git add . гэвэл өөрчлөгдсөн бүх файлыг stage хийнэ.
- `git commit -m '[тайлбар]’` - git add хийгдсэн кодыг локал дээр хадгалж, push хийхэд бэлэн болгоно. Тайлбар дээр ямар өөрчлөлт хийсэнээ товч, тодорхой бичнэ. Жишээ: git commit -m 'added product modul'
- `git push origin [branch-name]` - Local дээр хадгалагдсан өөрчлөлтөө remote-рүү push хийнэ.
- `git pull` - Remote-с Local-руу файлыг татаж авна
- `git checkout` - branch хооронд шилжих
- …

branch, pull, reset, checkout, diff, stash гэх мэт бусад хэрэгтэй git command - уудыг судлах
https://github.com/joshnh/Git-Commands

# css зохион байгуулах

- **Scss** (https://sass-lang.com/) ашиглаж css бичвэл илүү цэгцтэй, хялбар, үр дүнтэйгээр дизайнаа хийх боломжтой. Variables, mixins, nesting… боломжуудыг ашиглах.
- **Styled component** (https://styled-components.com/) ашиглаж болно

  Yarn add sass
  Yarn add next-sass
