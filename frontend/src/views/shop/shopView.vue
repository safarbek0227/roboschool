<script>
import shopCardVue from '../../components/shop-card.vue';
export default {
  data() {
    return {};
  },
  components: {
    shopCardVue
  }
};
</script>
<template>
<br>
  <div class="container">
    <div class="search">
      <div class="big-input">
        <i class="fa-brands fa-searchengin"></i>
        <input type="text" placeholder="Qidirish" />
      </div>
      <div class="selection-group">
        <div class="select-input">
          <i class="fa-light fa-cassette-tape fa-beat"></i>
          <select name="gender" required="" id="id_gender">
            <option value="" selected="">Turi</option>

            <option value="Andijon">To'plamlar</option>

            <option value="Namangan">Ehtiyot qismlar</option>

            <option value="Samarqand">Tayyor jihozlar</option>

            <option value="Tashkent">Ish asboblari</option>

            <option value="Jizzax">Naborlar</option>
          </select>
        </div>
        <div class="select-input">
          <i class="fa-solid fa-truck fa-beat"></i>
          <select name="gender" required="" id="id_gender">
            <option value="" selected="">Yetkazib berish</option>

            <option value="Andijon">Bepul</option>

            <option value="Namangan">Tezkor</option>
          </select>
        </div>
      </div>
    </div>
    <br><br>
    <div class="content">
      <div class="row">
        <shopCardVue />
      </div>
    </div>
  </div>
</template>
<style scoped>
.search {
  display: flex;
  margin: 150px auto 100px;
  padding: 5px;
  background: var(--nav-color);
  color: var(--color);
  border-radius: 10px;
  align-items: center;
  max-width: 1200px;
}
.search > * {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.search .big-input {
  width: 50%;
  background: var(--nav-color);
  height: 60px;
  padding: 15px;
  font-size: x-large;
  display: flex;
  align-items: center;
}

.search .big-input input {
  width: 80%;
  border: none;
  outline: none;
  background: transparent;
  margin-left: 15px;
  font-size: x-large;
}

.search .selection-group {
  display: flex;
  width: 50%;
}

.search .selection-group .select-input {
  width: 50%;
  font-size: xx-large;
  border-left: 1px solid #000;
  padding-left: 15px;
}

.search .selection-group .select-input i {
  font-size: x-large;
}

.search .selection-group .select-input select {
  width: 80%;
  margin-left: 5px;
  height: 50px;
  background: transparent;
  color: var(--color);
  border: none;
  outline: none;
  font-size: x-large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.search .selection-group .select-input option{
  background-color: var(--nav-color);
  color: var(--color);
}

@media (max-width: 1600px) {
  .search .selection-group .select-input {
    font-size: x-large;
  }
}

@media (max-width: 1020px) {
  .search {
    display: block;
    background-color: transparent;
  }

  .search .big-input {
    width: 100%;
    height: 60px;
    background: var(--nav-color);
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .search .big-input input {
    width: 70%;
  }

  .search .selection-group {
    width: 100%;
    font-size: x-large;
  }

  .search .selection-group .select-input {
    width: 49%;
    font-size: x-large;
    height: 60px;
    background: var(--nav-color);
    padding: 10px;
    border: none;
    border-radius: 10px;
  }

  .search .selection-group .select-input:first-child {
    margin-right: 15px;
  }
}

@media (max-width: 580px) {
  .search {
    margin: 150px 2% 0 2%;
  }

  .search .selection-group .select-input select {
    width: 65%;
    font-size: medium;
    padding: 0;
  }
}
@media (max-width: 360px) {
  .search .selection-group {
    flex-direction: column;
  }

  .search .selection-group .select-input {
    width: 100%;
    margin-top: 5px;
  }

  .search .selection-group .select-input select {
    width: 75%;
    font-size: x-large;
  }
}
</style>