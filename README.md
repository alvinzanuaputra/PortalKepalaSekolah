<h1 align="center"><img src="./public/assets/imagesSCB/Logo%20IMoSy_black.svg"></h1>

<h1 align="center">Konten Integrated Monitoring System(IMoSy)</h1>

[Deskripsi](#a-deskripsi) | [Ruang Lingkup Pengembangan](#b-ruang-lingkup-pengembangan) | [Diagram](#c-diagram) | [Fitur](#d-fitur) | [Konsep OOP](#e-konsep-oop) | [Tipe Desain Pengembangan](#f-tipe-desain-pengembangan) | [Dokumentasi](#g-dokumentasi) | [Development Team](#development-team)
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:


## A. Deskripsi
[`^ kembali ke atas ^`](#konten-integrated-monitoring-systemimosy)

**Integrated Monitoring System** atau disebut dengan **IMoSy** merupakan sistem berbasis Website yang digunakan untuk memonitoring pekerjaan guru misalnya pengisian data nilai siswa, monitoring data siswa, data guru, data tenaga pendidik dan monitoring data inventaris. Selain monitoring dalam sistem ini juga dapat dilakukan pengelolaan data, seperti CRUD inventaris, CRUD kbm, dll yang dilakukan oleh tenaga pendidikan lain selain kepsek, yaitu pekerja TU. Sistem ini dikembangkan atas dasar permintaan Kepala Sekolah SMP Cendekia Baznas (SCB) Bogor yang menginginkan adanya sistem terintegrasi untuk melakukan monitoring terutama untuk memantau pekerjaan guru SCB. Kemudian ditambah monitoring lain seperti pada pendataan inventaris.


## B. Ruang Lingkup Pengembangan
[`^ kembali ke atas ^`](#konten-integrated-monitoring-systemimosy) 
### Software
- Visual Studio Code
- Sublime Text
- LARAGON 6
- Postman
- Google Chrome
### Hardware
- Perangkat 1
  - ASUS TUF GAMING A15
  - NVIDIA GTX 1650
  - AMD RYZEN 4600H  
  - SSD 256 GB
### Tech Stack
- Laravel (Framework)
- MySQL/DB Maria (DBMS)
- Apache (Server)
- Mailtrap (Email Service)
- Blade (Templating Engine)
- Bootstrap (CSS Framework)
- composer (System Requirement Controller)



## C. Diagram
[`^ kembali ke atas ^`](#konten-integrated-monitoring-systemimosy)

### Use Case Diagram
![Use case](/berkas/dokumentasi_IMoSy/use_case.png)
### Activity Diagram
![Activity diagram](/berkas/dokumentasi_IMoSy/activity_diagram_2.png)
### Class Diagram
![Class diagram](/berkas/dokumentasi_IMoSy/Class_diagram_fix.png)
### Entity Relationship Diagram
![ERD](/berkas/dokumentasi_IMoSy/erd.png)



## D. Fitur
[`^ kembali ke atas ^`](#konten-integrated-monitoring-systemimosy)

### 1. Login
Berikut merupakan tampilan form login, yang sudah terintegrasi dengan teknologi *Single-sign-on* (SSO), yaitu suatu teknologi dimana semua sistem-sistem yang berbeda dapat terintegrasi dalam satu akun pengguna sehingga dapat memfasilitasi pengguna untuk dapat mengakses beberapa aplikasi dengan menggunakan satu akun saja dalam sekali otentikasi/login. Login pada IMoSy mengharuskan user mengisi email dan password dari akun SSO user. Setelah login, user akan diarahkan pada halaman Beranda yang berisi identitas user, beberapa shortcut fitur, serta ringkasan monitoring status pekerjaan guru.

| Halaman Login | Beranda |
| ----- | ----- |
| ![Login](/berkas/dokumentasi_IMoSy/login_page.png) | ![Beranda](/berkas/dokumentasi_IMoSy/main_page_part1.png) |


### 2. Monitoring Pekerjaan Guru
Fitur ini memungkinkan user, Kepala Sekolah, dapat memantau pekerjaan guru seperti pengisian data nilai UTS dan UAS untuk nilai rapor. Apabila guru yang bersangkutan belum juga menyelesaikan tugasnya maka Kepala Sekolah dapat mengirimkan pesan peringatan kepada guru yang bersangkutan.

| Ringkasan | Tabel Utama |
| ----- | ----- |
| ![status1](/berkas/dokumentasi_IMoSy/status_guru_part1.png) | ![status2](/berkas/dokumentasi_IMoSy/status_guru_part2.png) |


### 3. Kirim Pesan
Fitur kirim pesan pada sistem ini digunakan untuk mengirim pesan reminder kepada guru agar segera menyelesaikan pekerjaannya yang belum selesai, seperti input data nilai UTS atau UAS. Melalui fitur ini, pesan akan dikirim ke email guru atau pegawai yang bersangkutan.

- **Tulis Pesan**

| Option | Tulis Pesan |
| ----- | ----- |
| <img src="/berkas/dokumentasi_IMoSy/tulis_pesan_part1.png"> | ![create](/berkas/dokumentasi_IMoSy/tulis_pesan_part2.png) |

- **Pesan Terkirim**

| Daftar Pesan Terkirim | Detail Pesan Terkirim |
| ----- | ----- |
| ![outbox1](/berkas/dokumentasi_IMoSy/outbox.png) | ![outbox2](/berkas/dokumentasi_IMoSy/outbox_detail.png) |

### 4. View Data Siswa, Guru, dan Tenaga Pendidik
- **Data Siswa**

| Data | Biodata |
| ----- | ----- |
| ![data_siswa](/berkas/dokumentasi_IMoSy/data_siswa.png) | ![data_siswa](/berkas/dokumentasi_IMoSy/biodata_siswa_part1.png) |

- **Data Guru**

| Data | Biodata |
| ----- | ----- |
| ![data_guru](/berkas/dokumentasi_IMoSy/data_guru.png) | ![data_guru](/berkas/dokumentasi_IMoSy/biodata_guru_part1.png) |

- **Data Tenaga Pendidik**

| Data | Biodata |
| ----- | ----- |
| ![data_tendik](/berkas/dokumentasi_IMoSy/data_tendik.png) | ![data_tendik](/berkas/dokumentasi_IMoSy/biodata_tendik_part1.png) |

### 5. Monitoring Data Inventaris 
Fitur ini memungkinan user memonitor dan mengelola pendataan inventaris. Pengelolaan yang dapat dilakukan adalah *create*, *read*, *update*, dan *delete* (CRUD). Selain itu sistem dapat melakukan *auto-numbering* pada kode inventaris, sesuai format kode inventaris yang digunakan oleh SCB sebagai berikut:

![format_kode](/berkas/dokumentasi_IMoSy/format_kode_inventaris.png)

Pengelolaan inventaris terbagi menjadi beberapa sub menu, antara lain pengelolaan berdasarkan:
| Menu | Penjelasan | View |
| ----- | ----- | ----- |
| **a. Jenis Inventaris** | Pada menu ini inventaris dikelola berdasarkan jenisnya. | ![jenis_inventaris](/berkas/dokumentasi_IMoSy/jenis_inventaris.png) ![jenis_inventaris1](/berkas/dokumentasi_IMoSy/jenis_inventaris_input_data.png) |
| **b. Kebutuhan Barang** | Menu ini digunakan untuk memonitor kondisi inventaris yang dimiliki berdasarkan jumlah baik, kurang baik, dan rusak dari inventaris yang ada. | ![kebutuhan_barang](/berkas/dokumentasi_IMoSy/kebutuhan_barang.png) |
| **c. Data Inventaris** | Sub ini berisi detil dari satuan barang inventaris. *Auto-numbering* kode inventaris ditampilkan pada sub ini. | ![data_inventaris](/berkas/dokumentasi_IMoSy/data_inventaris.png) |
| **d. Gedung** | Menu ini digunakan untuk mendata ketersedian gedung yang ada di SCB. | ![gedung](/berkas/dokumentasi_IMoSy/data_gedung.png) |
| **e. Ruangan** | Menu ini digunakan untuk mendata ketersediaan ruangan yang ada di SCB. | ![ruangan](/berkas/dokumentasi_IMoSy/data_ruangan.png) |

### Beberapa Tampilan Mobile dari Sistem
| Login | Beranda | Sidebar | Data Inventaris | Status Pekerjaan Guru | Tulis Pesan |
| ----- | ----- | ----- | ----- | ----- | ----- |
| ![mobile1](/berkas/dokumentasi_IMoSy/mobile1.png) | ![mobile2](/berkas/dokumentasi_IMoSy/mobile2.png) | ![mobile3](/berkas/dokumentasi_IMoSy/mobile3.png) | ![mobile4](/berkas/dokumentasi_IMoSy/mobile4.png) | ![mobile5](/berkas/dokumentasi_IMoSy/mobile5.png) | ![mobile6](/berkas/dokumentasi_IMoSy/mobile6.png) |


## E. Konsep OOP
[`^ kembali ke atas ^`](#konten-integrated-monitoring-systemimosy)
### 1. Encapsulation
Encapsulation adalah membungkus semua atribut dan metode yang ada di dalam class agar tidak dapat di akses secara leluasa oleh class lainnya. Untuk mengaplikasikan hal tersebut terdapat Access Modifier yang terdiri dari : Public, Private, dan Protected.

```text
...
class InventoryController extends Controller
{
    public function prepareInventoryData($data, $isSlice = false)
    {
        if ($isSlice) {
            $inventarises = $data->slice(0, 20);
        } else {
            $inventarises = $data;
        }
    . . .

...
```
### 2. Inheritance
Penggunaan inheritance dalam OOP bertujuan agar berbagai object dengan memiliki karakteristik umum yang sama dapat dikelompokan ke dalam satu kelompok. Hal ini akan mempermudah proses pengembangan disaat ada sebuat atribut atau metode umum yang ingin diubah. Pada projek ini, konsep Inheritance diaplikasikan menggunakan Polymorphic Relationships. Digunakannya Polymorphic Relationships karena tidak ada fitur khusus inheritance pada Eloquent ORM milik Laravel.
```text
...
class Civitas extends Model
{
    public function civitasable()
    {
        return $this->morphTo();
    }
    . . .


class Siswa extends Model
{
    public function civitas()
    {
        return $this->morphOne('App\Civitas', 'civitasable');
    }
    . . .
...
```
### 3. Abstrak Class
Abstract class adalah class-class yang memiliki informasi abstrak dan metode-metode dari sekumpulan data. Abstract Class tidak bisa diubah dan berlaku sebagai kerangka dalam penciptaan subclass-subclassnya. Sebuah Abstract Classs memiliki informasi dan metode yang dapat diturunkan ke subclassnya, dan seluruh subclass akan mengikuti apa saja metode yang akan diturunkan oleh Abstract Class. Tetapi abstract class sendiri tidak bisa diinstantiasi atau dibuat objectnya. Pada projek ini digunakan "Trait" yang mirip dengan abstract class.

```text
...
class LoginController extends Controller
{
   use AuthenticatesUsers;
   
   protected $redirectTo = RouteServiceProvider::HOME;
   . . .


trait AuthenticatesUsers
{
    use RedirectsUsers, ThrottlesLogins;

    public function showLoginForm()
    {
        return view('auth.login');
    }  
    . . .  
...
```

## F. Tipe Desain Pengembangan
[`^ kembali ke atas ^`](#konten-integrated-monitoring-systemimosy)
### MVC
Kami menggunakan design pattern MVC untuk memisahkan seluruh logika bisnis dari user interface yang ada di dalam sistem. MVC dibangun diatas tiga komponen yaitu Model, View, dan Controller. Laravel sudah mengadopsi design pattern MVC.

Kami memanfaatkan sebuah templating engine bernama Blade yang sudah tersedia di Laravel untuk membangun komponen View. Fitur-fitur di Blade memungkinkan kami untuk menerapkan konsep component dan layouting yang akan mempermudah di saat komponen view dari sistem ini sudah mulai semakin banyak dan semakin kompleks. 

Kami menggunakan sebuah ORM(Object relational Modeling) yang bernama Eloquent yang sudah ada pada laravel sebagai komponen Model. Melalui Eloquent, kami dapat merepresentasikan setiap entitas yang ada di database sebagai sebuah “model” yang kemudian model tersebut digunakan sebagai high level interface untuk mengambil data dari database. Jika sebuah model diubah, maka setiap model dari entitas yang memiliki ketergantungan pada model tersebut akan diubah juga. Seperti, apabila kita menghapus obj ruangan maka objek kebutuhan barang dan objek inventaris milik ruangan tersebut akan otomatis terhapus juga.

Pada komponen Controller, laravel sudah menyediakan sebuah class khusus yaitu class Controller. Pada komponen ini akan diletakkan semua logika bisnis yang berjalan di sistem. Setiap proses CRUD juga akan diletakkan pada Controller memungkinkan kita untuk mengganti isi dari model yang sudah dibuat menggunakan operasi CRUD.

### Factory Pattern
Factory pattern memungkinkan kami untuk menginstansiasi objek tanpa harus peduli dengan proses logika dibalik instansiasi tersebut. Pada pengembangan sistem ini, kami menggunakan teknik tersebut saat menginstansiasi View di Laravel. 

### Builder(Manager) Pattern
Builder pattern sangat membantu disaat harus menginstansiasi sebuah objek yang kompleks secara bertahap dan juga disaat kita ingin menginstansiasi beberapa objek dari kelas yang berbeda melalui satu buah builder. Design pattern ini digunakan saat kami membuat session untuk login user.

### Provider Pattern
Pattern yang satu ini, memungkinkan kami untuk mengakses service-service penting melalui satu pintu. Kami juga dapat menambahkan service baru jika diperlukan. Pada laravel, semua service penting di daftarkan menggunakan teknik ini. Kami berencana untuk menambahkan sebuah service baru untuk generate laporan pekerjaan guru dalam format excel atau pdf. 